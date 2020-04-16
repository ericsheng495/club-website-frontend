import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router'

const COMPONENT_CACHE_DURATION = 60 * 60 * 1000;

function getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
        .map(v => v.url.map(segment => segment.toString()).join('/'))
        .join('/');
}

const ReusePageURLs: string[] = ['/', '/teach4life', '/publicinfo/event/list', '/about', '/contact'];

export class AppRouteReuseStrategy implements RouteReuseStrategy {

    detachedRouteHandles: { [key: string]: any[] } = {}; // key is url, and value is at [handle, timestamp] format
    /** Determines if this route (and its subtree) should be detached to be reused later */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        const key = getResolvedUrl(route);
        return ReusePageURLs.includes(key);
        // return route.routeConfig.path === HomeRoute;
    }

    /** Stores the detached route */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        const date = new Date();
        const key = getResolvedUrl(route);
        if (!handle) { return; }
        this.detachedRouteHandles[key] = [handle, date.getTime()]
    }

    /** Determines if this route (and its subtree) should be reattached */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const date = new Date();
        const key = getResolvedUrl(route);
        if (!this.detachedRouteHandles[key]) { return false; }
        if (date.getTime() - this.detachedRouteHandles[key][1]  > COMPONENT_CACHE_DURATION) {
            return false; 
        }
        return true;
    }

    /** Retrieves the previously stored route */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        const date = new Date();
        const key = getResolvedUrl(route);
        if (!this.detachedRouteHandles[key]) { return null; }
        if (date.getTime() - this.detachedRouteHandles[key][1]  > COMPONENT_CACHE_DURATION) { return null; }
        return this.detachedRouteHandles[key][0];
    }

    /** Determines if a route should be reused */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // Below is the default implementation;
        return future.routeConfig === curr.routeConfig;
    }
}