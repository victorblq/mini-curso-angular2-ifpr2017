import { MiniCursoSemMateralPage } from './app.po';

describe('mini-curso-sem-materal App', () => {
  let page: MiniCursoSemMateralPage;

  beforeEach(() => {
    page = new MiniCursoSemMateralPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
