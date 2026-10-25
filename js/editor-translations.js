'use strict';
const editorTranslations = {
  "미리보기에서 수정할 문구나 이미지를 누르세요. HTML도 직접 편집할 수 있습니다.": [
    "미리보기에서 수정할 문구나 이미지를 누르세요. HTML도 직접 편집할 수 있습니다.",
    "プレビューの文章や画像を選んで編集できます。HTMLの直接編集も可能です。",
    "Select text or an image in the preview to edit it. You can also edit the HTML directly.",
    "Chọn chữ hoặc ảnh trong bản xem trước để sửa. Bạn cũng có thể sửa HTML trực tiếp.",
    "点击预览中的文字或图片进行编辑，也可直接修改HTML。"
  ],
  "임시 저장은 이 브라우저에만 적용됩니다. 공개 사이트에는 자동 반영되지 않습니다. 수정한 HTML을 내려받아 GitHub의 같은 파일에 반영해 주세요. 수정 문구는 자동 번역되지 않습니다.": [
    "임시 저장은 이 브라우저에만 적용됩니다. 공개 사이트에는 자동 반영되지 않습니다. 수정한 HTML을 내려받아 GitHub의 같은 파일에 반영해 주세요. 수정 문구는 자동 번역되지 않습니다.",
    "下書きはこのブラウザーのみに保存され、公開サイトには自動反映されません。編集したHTMLをダウンロードし、GitHubの同じファイルを更新してください。変更文は自動翻訳されません。",
    "Drafts are saved only in this browser and do not automatically update the public site. Download your HTML and update the matching file on GitHub. Edited text is not automatically translated.",
    "Bản nháp chỉ lưu trong trình duyệt này, không tự cập nhật trang công khai. Tải HTML rồi cập nhật đúng tệp trên GitHub. Nội dung sửa không được dịch tự động.",
    "草稿仅保存在此浏览器，不会自动更新公开网站。请下载HTML并更新GitHub中的同名文件。修改的文字不会自动翻译。"
  ],
  "수정할 페이지": [
    "수정할 페이지",
    "編集するページ",
    "Page to edit",
    "Trang cần sửa",
    "选择页面"
  ],
  "임시 저장": [
    "임시 저장",
    "下書きを保存",
    "Save draft",
    "Lưu bản nháp",
    "保存草稿"
  ],
  "HTML 다운로드": [
    "HTML 다운로드",
    "HTMLをダウンロード",
    "Download HTML",
    "Tải HTML",
    "下载HTML"
  ],
  "GitHub에서 반영 ↗": [
    "GitHub에서 반영 ↗",
    "GitHubで反映 ↗",
    "Update on GitHub ↗",
    "Cập nhật trên GitHub ↗",
    "在GitHub中更新 ↗"
  ],
  "원본 다시 불러오기": [
    "원본 다시 불러오기",
    "元のページを再読込",
    "Reload original",
    "Tải lại bản gốc",
    "重新加载原版"
  ],
  "선택한 요소 수정": [
    "선택한 요소 수정",
    "選択した要素を編集",
    "Edit selected element",
    "Sửa phần tử đã chọn",
    "编辑所选元素"
  ],
  "미리보기에서 문구나 이미지를 선택하세요.": [
    "미리보기에서 문구나 이미지를 선택하세요.",
    "プレビューで文章や画像を選んでください。",
    "Select text or an image in the preview.",
    "Chọn chữ hoặc ảnh trong bản xem trước.",
    "请在预览中选择文字或图片。"
  ],
  "문구": [
    "문구",
    "文章",
    "Text",
    "Nội dung chữ",
    "文字"
  ],
  "이미지 주소": [
    "이미지 주소",
    "画像URL",
    "Image URL",
    "Địa chỉ ảnh",
    "图片地址"
  ],
  "이미지 파일 선택": [
    "이미지 파일 선택",
    "画像ファイルを選択",
    "Choose an image file",
    "Chọn tệp ảnh",
    "选择图片文件"
  ],
  "이미지 설명": [
    "이미지 설명",
    "画像の説明",
    "Image description",
    "Mô tả ảnh",
    "图片说明"
  ],
  "이동할 링크": [
    "이동할 링크",
    "リンク先",
    "Link destination",
    "Đường dẫn liên kết",
    "链接地址"
  ],
  "글자 색상 (선택)": [
    "글자 색상 (선택)",
    "文字色（任意）",
    "Text color (optional)",
    "Màu chữ (tùy chọn)",
    "文字颜色（可选）"
  ],
  "글자 크기 (px, 선택)": [
    "글자 크기 (px, 선택)",
    "文字サイズ（px・任意）",
    "Font size (px, optional)",
    "Cỡ chữ (px, tùy chọn)",
    "字号（px，可选）"
  ],
  "문구 정렬": [
    "문구 정렬",
    "文字の配置",
    "Text alignment",
    "Căn chỉnh chữ",
    "文字对齐"
  ],
  "기존 설정 유지": [
    "기존 설정 유지",
    "既存の設定を維持",
    "Keep existing setting",
    "Giữ thiết lập cũ",
    "保留原设置"
  ],
  "왼쪽": [
    "왼쪽",
    "左",
    "Left",
    "Trái",
    "左对齐"
  ],
  "가운데": [
    "가운데",
    "中央",
    "Center",
    "Giữa",
    "居中"
  ],
  "오른쪽": [
    "오른쪽",
    "右",
    "Right",
    "Phải",
    "右对齐"
  ],
  "선택한 요소에 적용": [
    "선택한 요소에 적용",
    "選択した要素に適用",
    "Apply to selection",
    "Áp dụng cho phần đã chọn",
    "应用到所选元素"
  ],
  "미리보기": [
    "미리보기",
    "プレビュー",
    "Preview",
    "Xem trước",
    "预览"
  ],
  "편집 화면에서는 링크 이동과 스크립트 실행이 꺼져 있습니다.": [
    "편집 화면에서는 링크 이동과 스크립트 실행이 꺼져 있습니다.",
    "編集画面ではリンク移動とスクリプト実行が無効です。",
    "Links and scripts are disabled inside the editing preview.",
    "Liên kết và mã lệnh không hoạt động trong bản xem trước.",
    "编辑预览中已禁用链接跳转和脚本执行。"
  ],
  "페이지 미리보기": [
    "페이지 미리보기",
    "ページのプレビュー",
    "Page preview",
    "Xem trước trang",
    "页面预览"
  ],
  "HTML 직접 편집": [
    "HTML 직접 편집",
    "HTMLを直接編集",
    "Edit HTML directly",
    "Sửa HTML trực tiếp",
    "直接编辑HTML"
  ],
  "전체 HTML": [
    "전체 HTML",
    "HTML全体",
    "Full HTML",
    "Toàn bộ HTML",
    "完整HTML"
  ],
  "HTML을 미리보기에 적용": [
    "HTML을 미리보기에 적용",
    "HTMLをプレビューに適用",
    "Apply HTML to preview",
    "Áp dụng HTML vào xem trước",
    "将HTML应用到预览"
  ],
  "미리보기를 확인한 뒤 임시 저장하거나 다운로드하세요.": [
    "미리보기를 확인한 뒤 임시 저장하거나 다운로드하세요.",
    "プレビューを確認してから保存・ダウンロードしてください。",
    "Check the preview, then save a draft or download.",
    "Kiểm tra bản xem trước rồi lưu nháp hoặc tải xuống.",
    "请确认预览后保存草稿或下载。"
  ],
  "페이지를 불러왔습니다.": [
    "페이지를 불러왔습니다.",
    "ページを読み込みました。",
    "Page loaded.",
    "Đã tải trang.",
    "页面已加载。"
  ],
  "저장된 초안을 불러왔습니다.": [
    "저장된 초안을 불러왔습니다.",
    "保存済みの下書きを読み込みました。",
    "Saved draft loaded.",
    "Đã tải bản nháp đã lưu.",
    "已加载保存的草稿。"
  ],
  "저장하지 않은 변경 사항이 있습니다. 다른 페이지로 이동할까요?": [
    "저장하지 않은 변경 사항이 있습니다. 다른 페이지로 이동할까요?",
    "未保存の変更があります。別のページへ移動しますか？",
    "You have unsaved changes. Switch pages?",
    "Có thay đổi chưa lưu. Chuyển trang?",
    "有未保存的修改，是否切换页面？"
  ],
  "브라우저에 임시 저장했습니다. 공개 사이트는 변경되지 않았습니다.": [
    "브라우저에 임시 저장했습니다. 공개 사이트는 변경되지 않았습니다.",
    "ブラウザーに下書きを保存しました。公開サイトは変更されていません。",
    "Draft saved in this browser. The public site has not changed.",
    "Đã lưu nháp trong trình duyệt. Trang công khai chưa thay đổi.",
    "草稿已保存到此浏览器，公开网站未改变。"
  ],
  "임시 저장하지 못했습니다. HTML을 다운로드해 보관해 주세요.": [
    "임시 저장하지 못했습니다. HTML을 다운로드해 보관해 주세요.",
    "保存できませんでした。HTMLをダウンロードしてください。",
    "Could not save. Download the HTML to keep your changes.",
    "Không thể lưu. Hãy tải HTML để giữ thay đổi.",
    "保存失败，请下载HTML以保留修改。"
  ],
  "페이지를 불러오지 못했습니다. 다시 시도해 주세요.": [
    "페이지를 불러오지 못했습니다. 다시 시도해 주세요.",
    "ページを読み込めませんでした。再度お試しください。",
    "Could not load the page. Please try again.",
    "Không tải được trang. Vui lòng thử lại.",
    "无法加载页面，请重试。"
  ],
  "변경 내용을 버리고 GitHub에 있는 원본을 다시 불러올까요?": [
    "변경 내용을 버리고 GitHub에 있는 원본을 다시 불러올까요?",
    "変更を破棄してGitHubの元のページを読み込みますか？",
    "Discard changes and reload the published source?",
    "Bỏ thay đổi và tải lại nguồn đã xuất bản?",
    "是否放弃修改并重新加载已发布的原版？"
  ],
  "수정 내용을 적용했습니다. 임시 저장하거나 HTML을 다운로드해 주세요.": [
    "수정 내용을 적용했습니다. 임시 저장하거나 HTML을 다운로드해 주세요.",
    "変更を適用しました。保存またはダウンロードしてください。",
    "Changes applied. Save a draft or download the HTML.",
    "Đã áp dụng thay đổi. Hãy lưu nháp hoặc tải HTML.",
    "修改已应用，请保存草稿或下载HTML。"
  ],
  "이미지는 2MB 이하의 JPG·PNG·WebP 파일을 선택해 주세요.": [
    "이미지는 2MB 이하의 JPG·PNG·WebP 파일을 선택해 주세요.",
    "2MB以下のJPG・PNG・WebPを選択してください。",
    "Choose a JPG, PNG or WebP image under 2 MB.",
    "Chọn ảnh JPG, PNG hoặc WebP dưới 2 MB.",
    "请选择小于2MB的JPG、PNG或WebP图片。"
  ],
  "색상 또는 글자 크기를 확인해 주세요.": [
    "색상 또는 글자 크기를 확인해 주세요.",
    "色または文字サイズを確認してください。",
    "Check the color or font size.",
    "Kiểm tra màu hoặc cỡ chữ.",
    "请检查颜色或字号。"
  ],
  "읽는 중입니다.": [
    "읽는 중입니다.",
    "読み込み中です。",
    "Loading…",
    "Đang tải…",
    "正在加载…"
  ],
  "미리보기를 갱신했습니다.": [
    "미리보기를 갱신했습니다.",
    "プレビューを更新しました。",
    "Preview updated.",
    "Đã cập nhật xem trước.",
    "预览已更新。"
  ],
  "저장 공간을 읽을 수 없어 원본을 불러왔습니다. 기존 저장 내용은 덮어쓰지 않았습니다.": [
    "저장 공간을 읽을 수 없어 원본을 불러왔습니다. 기존 저장 내용은 덮어쓰지 않았습니다.",
    "保存領域を読めないため原本を読み込みました。既存データは上書きしていません。",
    "Storage could not be read, so the original was loaded. Existing drafts were not overwritten.",
    "Không đọc được bộ nhớ nên đã tải bản gốc. Bản nháp cũ chưa bị ghi đè.",
    "无法读取存储，已加载原版，现有草稿未被覆盖。"
  ]
};
