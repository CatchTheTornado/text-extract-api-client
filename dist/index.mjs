// src/apiClient.ts
import axios from "axios";
var ApiClient = class {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL
    });
  }
  async uploadFile(data) {
    const response = await this.axiosInstance.post("/ocr", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  }
  async requestOcr(data) {
    const response = await this.axiosInstance.post("/ocr/request", data);
    return response.data;
  }
  async getResult(taskId) {
    const response = await this.axiosInstance.get(`/ocr/result/${taskId}`);
    return response.data;
  }
  async clearCache() {
    const response = await this.axiosInstance.post("/ocr/clear_cache");
    return response.data;
  }
  async listFiles(storageProfile = "default") {
    const response = await this.axiosInstance.get("/storage/list", {
      params: { storage_profile: storageProfile }
    });
    return response.data;
  }
  async loadFile(fileName, storageProfile = "default") {
    const response = await this.axiosInstance.get("/storage/load", {
      params: { file_name: fileName, storage_profile: storageProfile }
    });
    return response.data;
  }
  async deleteFile(fileName, storageProfile = "default") {
    const response = await this.axiosInstance.delete("/storage/delete", {
      params: { file_name: fileName, storage_profile: storageProfile }
    });
    return response.data;
  }
};
export {
  ApiClient
};
