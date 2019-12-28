import { Router } from '../Router'

export function Action(router: Router, name?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        router.registerAction(name !== undefined ? name : propertyKey, target[propertyKey])
    }
}