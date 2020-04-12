import parseDataURL = require("data-urls");
import { URLRecord } from "whatwg-url";

declare const urlRecord: URLRecord;
declare const dataURL: parseDataURL.DataURL;

// Methods:
parseDataURL("data:text/plain,foo"); // $ExpectType DataURL | null
parseDataURL.fromURLRecord(urlRecord); // $ExpectType DataURL | null

// Result:
dataURL.mimeType; // $ExpectType MIMEType
dataURL.body; // $ExpectType Buffer
