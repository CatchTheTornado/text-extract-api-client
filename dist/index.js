"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ApiClient: () => ApiClient
});
module.exports = __toCommonJS(src_exports);

// src/apiClient.ts
var import_axios = __toESM(require("axios"));
var ApiClient = class {
  constructor(baseURL, username, password) {
    this.axiosInstance = import_axios.default.create({
      baseURL,
      auth: username && password ? { username, password } : void 0
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApiClient
});
