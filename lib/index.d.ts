declare type Extensions = 'bat' | 'c' | 'cpp' | 'css' | 'html' | 'ini' | 'java' | 'js' | 'jsx' | 'json' | 'lua' | 'md' | 'php' | 'py' | 'pyc' | 'scss' | 'sql' | 'xml' | 'yaml' | 'ahk';
export declare class HastExp {
    private url;
    constructor();
    makePost(message: string, extension?: Extensions): Promise<any>;
    fetchPost(linkSlug: string): Promise<any>;
}
export {};
//# sourceMappingURL=index.d.ts.map