# Text Extract API Client

TypeScript client for the [Text Extract API](https://github.com/CatchTheTornado/text-extract-api).

## Installation

```bash
npm install text-extract-api-client
```

## Usage

First, import the `ApiClient` class and create an instance:

```typescript
import { ApiClient, OcrRequest } from 'text-extract-api-client';

const apiClient = new ApiClient('https://api.example.com');
```

### Upload a File

To upload a file, create a `FormData` object and use the `uploadFile` method:

```typescript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

apiClient.uploadFile(formData).then(response => {
    console.log(response);
});
```

### Request OCR

To request OCR processing, create an `OcrRequest` object and use the `requestOcr` method:

```typescript
const ocrRequest: OcrRequest = {
    strategy: 'default',
    model: 'ocr-model',
    file: 'base64-encoded-file-content',
    ocr_cache: true,
};

apiClient.requestOcr(ocrRequest).then(response => {
    console.log(response);
});
```

### Get OCR Result

To get the result of an OCR task, use the `getResult` method with the task ID:

```typescript
const taskId = 'your-task-id';

apiClient.getResult(taskId).then(result => {
    console.log(result);
});
```

### Clear Cache

To clear the OCR cache, use the `clearCache` method:

```typescript
apiClient.clearCache().then(response => {
    console.log(response);
});
```

### List Files

To list files in storage, use the `listFiles` method:

```typescript
apiClient.listFiles().then(files => {
    console.log(files);
});
```

### Load a File

To load a file from storage, use the `loadFile` method:

```typescript
const fileName = 'your-file-name';

apiClient.loadFile(fileName).then(file => {
    console.log(file);
});
```

### Delete a File

To delete a file from storage, use the `deleteFile` method:

```typescript
const fileName = 'your-file-name';

apiClient.deleteFile(fileName).then(response => {
    console.log(response);
});
```