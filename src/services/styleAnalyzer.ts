import { CodingStyle } from '../types';

export class StyleAnalyzer {
  analyzeCode(code: string): CodingStyle {
    return {
      indentation: this.detectIndentation(code),
      lineEndings: this.detectLineEndings(code),
      namingConvention: this.detectNamingConvention(code),
      commentStyle: this.detectCommentStyle(code)
    };
  }

  private detectIndentation(code: string): 'spaces' | 'tabs' {
    const spacesMatch = code.match(/^( +)/m);
    const tabsMatch = code.match(/^(\t+)/m);
    
    if (!spacesMatch && !tabsMatch) return 'spaces';
    return (spacesMatch?.length || 0) > (tabsMatch?.length || 0) ? 'spaces' : 'tabs';
  }

  private detectLineEndings(code: string): 'LF' | 'CRLF' {
    return code.includes('\r\n') ? 'CRLF' : 'LF';
  }

  private detectNamingConvention(code: string): 'camelCase' | 'snake_case' {
    const camelCaseCount = (code.match(/[a-z][A-Z]/g) || []).length;
    const snakeCaseCount = (code.match(/_[a-z]/g) || []).length;
    return camelCaseCount > snakeCaseCount ? 'camelCase' : 'snake_case';
  }

  private detectCommentStyle(code: string): 'inline' | 'block' {
    const inlineComments = (code.match(/\/\//g) || []).length;
    const blockComments = (code.match(/\/\*|\*\//g) || []).length;
    return inlineComments > blockComments ? 'inline' : 'block';
  }
}