/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/core/src/di/injector';
class IdlePreloadModuleInjector extends import0.NgModuleInjector<import1.IdlePreloadModule> {
  _IdlePreloadModule_0:import1.IdlePreloadModule;
  constructor(parent:import2.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.IdlePreloadModule {
    this._IdlePreloadModule_0 = new import1.IdlePreloadModule();
    return this._IdlePreloadModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.IdlePreloadModule)) { return this._IdlePreloadModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const IdlePreloadModuleNgFactory:import0.NgModuleFactory<import1.IdlePreloadModule> = new import0.NgModuleFactory(IdlePreloadModuleInjector,import1.IdlePreloadModule);