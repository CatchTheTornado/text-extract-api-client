interface OcrRequest {
    strategy: string;
    prompt?: string;
    model: string;
    file: string;
    ocr_cache: boolean;
    storage_profile?: string;
    storage_filename?: string;
}
interface OcrResponse {
    task_id?: string;
    text?: string;
}
declare class ApiClient {
    private axiosInstance;
    constructor(baseURL: string, username?: string, password?: string);
    uploadFile(data: FormData): Promise<OcrResponse>;
    requestOcr(data: OcrRequest): Promise<OcrResponse>;
    getResult(taskId: string): Promise<any>;
    clearCache(): Promise<any>;
    listFiles(storageProfile?: string): Promise<any>;
    loadFile(fileName: string, storageProfile?: string): Promise<any>;
    deleteFile(fileName: string, storageProfile?: string): Promise<any>;
}

export { ApiClient, OcrRequest, OcrResponse };
