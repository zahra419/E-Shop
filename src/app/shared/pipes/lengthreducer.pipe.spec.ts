import { LengthreducerPipe } from './lengthreducer.pipe';

describe('LengthreducerPipe', () => {
  const pipe = new LengthreducerPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms long string to shorter string width ... added ', () => {
    expect(pipe.transform('it s very long title to be displayed in small container')).toBe('it s very long title to be displayed in ...');
  });

});
