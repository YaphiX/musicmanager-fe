	import { Component } from '@angular/core';

@Component({
  selector: 'selecttag',
  templateUrl: './selecttag.component.html',
  styleUrls: ['./selecttag.component.css']
})
export class SelecttagComponent {
	createJson() {
		let result = [
			{
				"sub": "风格",
				"type": "分类方式",
				"children": [
					{
						"sub": "流行",
						"type": "标签名",
						"imgurl": "test",
						"sort": "1",
						"state": "线上"
					},
					{
						"sub": "摇滚",
						"type": "标签名",
						"imgurl": "test",
						"sort": "2",
						"state": "线上"
					},
					{
						"sub": "古典",
						"type": "标签名",
						"imgurl": "test",
						"sort": "3",
						"state": "开发中"
					}
				]
			},
			{
				"sub": "场景",
				"type": "分类方式",
				"children": [
					{
						"sub": "流行",
						"type": "标签名",
						"imgurl": "test",
						"sort": "1",
						"state": "线上"
					}
				]
			}
		]
		return {result}
	}

	toggle(index) {
		console.log(this.createJson())
		let parentId = 'parent' + index
		let childrenGroup = 'children' + index
		var parent = document.getElementById(parentId)
		var children = document.getElementsByName(childrenGroup)
		if ( parent.attributes['showChildren'].value == "true") {
			for (var i = 0; i < children.length; i++) {
				children[i].style.display = "none"
			}
			parent.attributes['showChildren'].value = "false"
		} else {
			for (var i = 0; i < children.length; i++) {
				children[i].style.display = ""
			}
			parent.attributes['showChildren'].value = "true"
		}
	}
}
