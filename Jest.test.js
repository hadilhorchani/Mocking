const OpinionExchange = require('./script');
const { addOpinion } = require('./script');

jest.mock('./script');

describe('addOpinion', () => {
  test('adds opinion correctly', () => {
    // Mock the behavior of the OpinionExchange class
    const mockOpinionExchange = new OpinionExchange();
    
    // Mock/Return Value: Specify a return value for the addOpinion method
    mockOpinionExchange.addOpinion.mockReturnValue('Opinion added successfully');

    // Mock/Side Effect: Log a message when the addOpinion method is called
    mockOpinionExchange.addOpinion.mockImplementation((objectName, opinion) => {
      console.log(`Opinion added for "${objectName}": "${opinion}"`);
    });

    // Call the function being tested
    const result = addOpinion('Object1', 'This is a test opinion');

    // Expectations for Mock/Return Value
    expect(result).toBe('Opinion added successfully');

    // Expectations for Mock/Side Effect
    expect(mockOpinionExchange.addOpinion).toHaveBeenCalledWith('Object1', 'This is a test opinion');
  });
});
