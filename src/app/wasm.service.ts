import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";


import * as Mod from "./../../wasm/nextnum";

import "!!file-loader?name=wasm/nextnum.wasm!../../wasm/nextnum.wasm";

@Injectable()
export class WasmService {
  module: any;
  Mod:any;

  wasmReady = new BehaviorSubject<boolean>(false);

  constructor() {
   
    this.instantiateWasm("wasm/nextnum.wasm");
  }

  private async instantiateWasm(url: string) {
    // fetch the wasm file
    const wasmFile = await fetch(url);

    // convert it into a binary array
    const buffer = await wasmFile.arrayBuffer();
    const binary = new Uint8Array(buffer);

    // create module arguments
    // including the wasm-file
    const moduleArgs = {
      wasmBinary: binary,
      onRuntimeInitialized: () => {
        this.wasmReady.next(true);
      }
    };

    // instantiate the module
  
     this.module = Mod(moduleArgs);
  }

 
  public nextnum(input: number): Observable<number> {
    return this.wasmReady.pipe(filter(value => value === true)).pipe(
      map(() => {
        return this.module._nextnum(input);
      })
    );
  }
}
