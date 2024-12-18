/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TableDisplayTag {
        "columns": string[];
        "data": any[];
        "first": string;
        "tableData": any[];
    }
}
declare global {
    interface HTMLTableDisplayTagElement extends Components.TableDisplayTag, HTMLStencilElement {
    }
    var HTMLTableDisplayTagElement: {
        prototype: HTMLTableDisplayTagElement;
        new (): HTMLTableDisplayTagElement;
    };
    interface HTMLElementTagNameMap {
        "table-display-tag": HTMLTableDisplayTagElement;
    }
}
declare namespace LocalJSX {
    interface TableDisplayTag {
        "columns"?: string[];
        "data"?: any[];
        "first"?: string;
        "tableData"?: any[];
    }
    interface IntrinsicElements {
        "table-display-tag": TableDisplayTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "table-display-tag": LocalJSX.TableDisplayTag & JSXBase.HTMLAttributes<HTMLTableDisplayTagElement>;
        }
    }
}
