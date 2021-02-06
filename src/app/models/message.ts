export class Message {
  content: string;
  timestamp: Date;
  isResponseText: boolean;
  
  constructor(content: string, isResponseText: boolean, timestamp?: Date){
    this.content = content;
    this.timestamp = timestamp;
    this.isResponseText = isResponseText;
  }
}
