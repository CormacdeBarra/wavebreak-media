import { getImages } from '../pixelbay-api';
describe('pixelbay-api', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('calls global fetch api with correct parameters', async () => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
          json: () => mockJsonPromise,
        });
        const expectedPixelBayUrl =
            'https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&q=test&image_type=photo&page=1'
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        await getImages('test', 1);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(expectedPixelBayUrl);
    });

    test('getImages returns correct data', async () => {
        const mockSuccessResponse = {
            image: {
                field: 'field value'
            },
        };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
          json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        const response = await getImages('test');
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(response).toEqual(mockSuccessResponse);
    });
})
