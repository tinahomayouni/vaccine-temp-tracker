// src/services/logTempreturePage.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class LogTempreturePageService {
  getMessage(): string {
    return 'Hello from Log Temperature Page!';
  }
}
