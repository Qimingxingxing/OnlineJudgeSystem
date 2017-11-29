import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DEFAULTCONTENT } from '../DefaultContent';
import { CollaborationService } from '../services/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';
declare const ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  languages: string[] = ["java", "python", "cpp"];
  language: string = "java";
  editor: any;
  output: string;
  sessionId: string;
  defaultContent = DEFAULTCONTENT;
  constructor(private data: DataService,
    private route: ActivatedRoute,
    private collaboration: CollaborationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the problem id from ActivatedRoute params
      this.sessionId = params['id'];
      this.initEditor();
    });
  }
  /**
   * initialize ace editor
   */
  initEditor(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();

    // set mouse focus in ace editor
    document.getElementsByTagName('textarea')[0].focus();

    // handshake socket.io
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;

    // register change event handler
    this.editor.on('change', e => {
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    });

    // register changeCursor event handler
    this.editor.getSession().getSelection().on('changeCursor', () => {
      const cursor = this.editor.getSession().getSelection().getCursor();
      this.collaboration.cursorMove(JSON.stringify(cursor));
    });

    // call restore buffer to get history/cached instructions
    this.collaboration.restoreBuffer();
  }

  setLanguage(language: string) {
    this.language = language;
    this.resetEditor();
  }

  resetEditor() {
    this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
    this.editor.setValue(this.defaultContent[this.language]);
    this.output = '';
  }

  submit() {
    this.output = "";
    this.data.buildAndRun({ language: this.language, code: this.editor.getValue() })
      .then(output => this.output = output.text);
  }
}
