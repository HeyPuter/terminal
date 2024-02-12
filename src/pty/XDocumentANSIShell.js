/*
 * Copyright (C) 2024  Puter Technologies Inc.
 *
 * This file is part of Puter's Terminal.
 *
 * Puter's Terminal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
export class XDocumentANSIShell {
    constructor (params) {
        this.internal_ = {};
        for ( const k in params ) this.internal_[k] = params[k];
    }

    attachToIframe (iframeEl) {
        const source = this.internal_.source;

        iframeEl.src = source;

        this.internal_.window = iframeEl.contentWindow;
        this.attachToWindow_();
    }

    attachToWindow_ () {
        const contentWindow = this.internal_.window;
        const ptt = this.internal_.ptt;

        window.addEventListener('message', evt => {
            if ( evt.source !== contentWindow ) return;
            if ( ! (evt.data instanceof Uint8Array) ) return;

            ptt.out.write(evt.data);
        });

        (async () => {
            for ( ;; ) {
                const chunk = (await ptt.in.read()).value;
                contentWindow.postMessage(chunk, this.internal_.source);
            }
        })();
    }
}
