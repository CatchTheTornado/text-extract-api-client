import axios, { AxiosInstance } from 'axios';

interface OcrRequest {
  strategy: string;
  prompt?: string;
  model: string;
  file: string; // Base64 encoded file content
  ocr_cache: boolean;
  storage_profile?: string;
  storage_filename?: string;
}

interface OcrResponse {
  task_id?: string;
  text?: string;
}

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, username?: string, password?: string) {
    this.axiosInstance = axios.create({
      baseURL,
      auth: username && password ? { username, password } : undefined,
    });
  }

  async uploadFile(data: FormData): Promise<OcrResponse> {
    const response = await this.axiosInstance.post<OcrResponse>('/ocr', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  async requestOcr(data: OcrRequest): Promise<OcrResponse> {
    const response = await this.axiosInstance.post<OcrResponse>('/ocr/request', data);
    return response.data;
  }

  async getResult(taskId: string): Promise<any> {
    const response = await this.axiosInstance.get(`/ocr/result/${taskId}`);
    return response.data;
  }

  async clearCache(): Promise<any> {
    const response = await this.axiosInstance.post('/ocr/clear_cache');
    return response.data;
  }

  async listFiles(storageProfile: string = 'default'): Promise<any> {
    const response = await this.axiosInstance.get('/storage/list', {
      params: { storage_profile: storageProfile },
    });
    return response.data;
  }

  async loadFile(fileName: string, storageProfile: string = 'default'): Promise<any> {
    const response = await this.axiosInstance.get('/storage/load', {
      params: { file_name: fileName, storage_profile: storageProfile },
    });
    return response.data;
  }

  async deleteFile(fileName: string, storageProfile: string = 'default'): Promise<any> {
    const response = await this.axiosInstance.delete('/storage/delete', {
      params: { file_name: fileName, storage_profile: storageProfile },
    });
    return response.data;
  }
}

export { ApiClient, OcrRequest, OcrResponse };