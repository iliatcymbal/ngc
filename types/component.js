module.exports = (path, postfix) => {
  const componentName = path.toLowerCase() + postfix;

  return `import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: '${componentName}.html',
  styleUrls: [ './${componentName}.css' ],
  templateUrl: './${componentName}.html'
})
export class HomeComponent implements OnInit {
  constructor() { }
  
  public ngOnInit() { }
}`;
};
