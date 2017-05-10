const helpers = require('./../lib/helpers');

module.exports = (name, prefix, postfix) => {
  const componentClassName = helpers.vengerToCamelCase(name);
  const componentFileName = postfix ? `${name}-${postfix}` : name;
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
export class ${componentClassName} implements OnInit {
  constructor() { }

  public ngOnInit() { }
}`;
};
