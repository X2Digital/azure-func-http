import { Context, HttpRequest } from '@azure/functions';
import { AzureHttpAdapter } from '@x2d/azure-func-http';
import { createApp } from '../apps/<%= getProjectName() %>/src/main.azure';

export default function(context: Context, req: HttpRequest): void {
  AzureHttpAdapter.handle(createApp, context, req);
}
