/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontSize } from '@ckeditor/ckeditor5-font';
import {
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload
} from '@ckeditor/ckeditor5-image';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { DocumentList, DocumentListProperties } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import {
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersLatin,
	SpecialCharactersMathematical
} from '@ckeditor/ckeditor5-special-characters';
import { Table } from '@ckeditor/ckeditor5-table';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Base64UploadAdapter,
		Bold,
		CodeBlock,
		DocumentList,
		DocumentListProperties,
		Essentials,
		FontSize,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Italic,
		Paragraph,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		Subscript,
		Superscript,
		Table,
		TextPartLanguage,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'italic',
				'underline',
				'bold',
				'subscript',
				'superscript',
				'alignment',
				'fontSize',
				'bulletedList',
				'numberedList',
				'|',
				'insertTable',
				'imageUpload',
				'specialCharacters',
				'|',
				'codeBlock',
				'textPartLanguage',
				'sourceEditing'
			]
		},
		language: 'en',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side'
			]
		}
	};
}

export default Editor;
