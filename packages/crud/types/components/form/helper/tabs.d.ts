/// <reference types="../index" />
export declare function useTabs({ config, Form }: {
    config: ClForm.Config;
    Form: Vue.Ref<any>;
}): {
    active: import("vue").Ref<string | undefined>;
    list: import("vue").ComputedRef<ClFormTabs.labels>;
    isLoaded: (value: any) => any;
    onLoad: (value: any) => void;
    get: () => ClForm.Item | undefined;
    set: (data: any) => void;
    change: (value: any, isValid?: boolean) => Promise<unknown>;
    clear: () => void;
    mergeProp: (item: ClForm.Item) => void;
    findGroup: (list: ClForm.Item[], prop: string) => undefined;
};
