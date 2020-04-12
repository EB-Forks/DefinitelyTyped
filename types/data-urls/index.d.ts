// Type definitions for data-urls 2.0
// Project: https://github.com/jsdom/data-urls#readme
// Definitions by: ExE Boss <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import MIMEType = require("whatwg-mimetype");
import { URLRecord } from "whatwg-url";

declare function parseDataURL(stringInput: string): parseDataURL.DataURL | null;
declare namespace parseDataURL {
	function fromURLRecord(urlRecord: URLRecord): DataURL | null;

	interface DataURL {
		mimeType: MIMEType;
		body: Buffer;
	}
}

export = parseDataURL;
