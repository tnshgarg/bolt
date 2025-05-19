export interface CodingStyle {
  indentation: 'spaces' | 'tabs';
  lineEndings: 'LF' | 'CRLF';
  namingConvention: 'camelCase' | 'snake_case';
  commentStyle: 'inline' | 'block';
}

export interface ProjectConfig {
  framework: 'react' | 'vue' | 'angular';
  styling: 'tailwind' | 'material-ui' | 'bootstrap';
  features: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface GeneratedProject {
  files: Array<{
    path: string;
    content: string;
  }>;
  documentation: string;
  commitHistory: Array<{
    message: string;
    timestamp: Date;
    changes: string[];
  }>;
}