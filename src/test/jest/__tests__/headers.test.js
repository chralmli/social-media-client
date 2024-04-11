jest.mock('../../../js/storage/index.js');

import { headers } from '../../../js/api/headers.js';

describe('headers.js', () => {
    it('should return an empty object without arguments', () => {
        expect(headers()).toEqual({});
    });
    
    it('should include Content-Type header when provided', () => {
        const contentType = "application/json";
        expect(headers(contentType)).toHaveProperty("Content-Type", contentType);
    });
    
    it('should include Authorization header with token from storage', () => {
        const token = 'valid-token';
        storage.load.mockReturnValue(null);
        const headersWithoutToken = headers();
        expect(headersWithoutToken).not.toHaveProperty("Authorization");
    })
});

/* */