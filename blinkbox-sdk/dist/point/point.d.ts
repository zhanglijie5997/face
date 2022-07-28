interface CreateType {
    appId?: string;
    name?: string;
    sdkUrl?: string;
    serverUrl?: string;
    loaded?: (ta: any) => void;
}
declare const create: (loaded?: Function, options?: CreateType) => void;

export { CreateType, create };
