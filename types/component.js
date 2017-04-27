const helpers = require('./../lib/helpers');

module.exports = (name, prefix, postfix) => {
  const componentClassName = helpers.vengerToCamelCase(name);
  const componentFileName = name + postfix;
  const componentSelector = prefix ? `${prefix}-${name}` : name;
  
  return `import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '${componentSelector}',
  styleUrls: [ './${componentFileName}.scss' ],
  templateUrl: './${componentFileName}.html'
})
export class ${componentClassName}Component implements OnInit {
  constructor() { }
  
  public ngOnInit() { }
}`;
};
