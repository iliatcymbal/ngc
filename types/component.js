const helpers = require('./../lib/helpers');

module.exports = (name, path) => {
  const componentClassName = helpers.vengerToCamelCase(path);
  const componentSelector = name.toLowerCase().replace(/\W+/g, '-');

  return `import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '${componentSelector}',
  styleUrls: [ './${name}.scss' ],
  templateUrl: './${name}.html'
})
export class ${componentClassName} implements OnInit {
  constructor() { }

  public ngOnInit() { }
}`;
};
