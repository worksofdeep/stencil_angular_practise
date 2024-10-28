/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UserDetailsForm {
    }
}
export interface UserDetailsFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUserDetailsFormElement;
}
declare global {
    interface HTMLUserDetailsFormElementEventMap {
        "formCompleted": any;
    }
    interface HTMLUserDetailsFormElement extends Components.UserDetailsForm, HTMLStencilElement {
        addEventListener<K extends keyof HTMLUserDetailsFormElementEventMap>(type: K, listener: (this: HTMLUserDetailsFormElement, ev: UserDetailsFormCustomEvent<HTMLUserDetailsFormElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLUserDetailsFormElementEventMap>(type: K, listener: (this: HTMLUserDetailsFormElement, ev: UserDetailsFormCustomEvent<HTMLUserDetailsFormElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLUserDetailsFormElement: {
        prototype: HTMLUserDetailsFormElement;
        new (): HTMLUserDetailsFormElement;
    };
    interface HTMLElementTagNameMap {
        "user-details-form": HTMLUserDetailsFormElement;
    }
}
declare namespace LocalJSX {
    interface UserDetailsForm {
        "onFormCompleted"?: (event: UserDetailsFormCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "user-details-form": UserDetailsForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "user-details-form": LocalJSX.UserDetailsForm & JSXBase.HTMLAttributes<HTMLUserDetailsFormElement>;
        }
    }
}
