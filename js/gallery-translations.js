'use strict';
const galleryTranslations = {
  "고정한 프로젝트가 먼저, 나머지는 최근 저장 순으로 전시됩니다. 새 프로젝트와 수정 사항은 이 브라우저에만 저장됩니다.": ["고정한 프로젝트가 먼저, 나머지는 최근 저장 순으로 전시됩니다. 새 프로젝트와 수정 사항은 이 브라우저에만 저장됩니다.", "固定したプロジェクトを優先し、その後は保存日時の新しい順に展示します。新規プロジェクトと編集内容はこのブラウザーだけに保存されます。", "Pinned projects appear first, followed by the most recently saved. New projects and edits are stored only in this browser.", "Dự án được ghim xuất hiện trước, tiếp theo là các dự án lưu gần đây. Dự án mới và chỉnh sửa chỉ lưu trong trình duyệt này.", "置顶项目优先展示，其余按最近保存排序。新项目和修改仅保存在此浏览器中。"],
  "경험의 전당": [
    "경험의 전당",
    "経験のギャラリー",
    "The Project Gallery",
    "Phòng trưng bày trải nghiệm",
    "经历展厅"
  ],
  "생각이 작품이 되는 공간.": [
    "생각이 작품이 되는 공간.",
    "アイデアが作品になる場所。",
    "Where ideas become work.",
    "Nơi ý tưởng trở thành tác phẩm.",
    "让想法成为作品的空间。"
  ],
  "스크롤로 갤러리 입장 ↓": [
    "스크롤로 갤러리 입장 ↓",
    "スクロールしてギャラリーへ ↓",
    "Scroll into the gallery ↓",
    "Cuộn để vào phòng trưng bày ↓",
    "向下滚动进入展厅 ↓"
  ],
  "스크롤하며 프로젝트를 만나보세요. 액자를 누르면 상세 내용을 볼 수 있습니다.": [
    "스크롤하며 프로젝트를 만나보세요. 액자를 누르면 상세 내용을 볼 수 있습니다.",
    "スクロールしてプロジェクトをご覧ください。額を押すと詳細を表示します。",
    "Scroll to explore. Select a frame to view the project.",
    "Cuộn để khám phá. Chọn khung tranh để xem dự án.",
    "滚动浏览，点击画框查看项目详情。"
  ],
  "이전 액자": [
    "이전 액자",
    "前の作品",
    "Previous frames",
    "Khung trước",
    "上一组画框"
  ],
  "다음 액자": [
    "다음 액자",
    "次の作品",
    "Next frames",
    "Khung tiếp theo",
    "下一组画框"
  ],
  "프로젝트 관리": [
    "프로젝트 관리",
    "プロジェクト管理",
    "Manage projects",
    "Quản lý dự án",
    "管理项目"
  ],
  "고정한 프로젝트가 먼저, 나머지는 최근 저장 순으로 전시됩니다. 프로젝트는 이 브라우저에 저장됩니다.": [
    "고정한 프로젝트가 먼저, 나머지는 최근 저장 순으로 전시됩니다. 프로젝트는 이 브라우저에 저장됩니다.",
    "固定したプロジェクトを先に、残りは保存日の新しい順に展示します。プロジェクトはこのブラウザーに保存されます。",
    "Pinned projects appear first, then recently saved projects. Projects are stored in this browser.",
    "Dự án ghim hiển thị trước, sau đó theo lần lưu mới nhất. Dự án được lưu trong trình duyệt này.",
    "优先展示置顶项目，其余按最近保存排序，项目保存在此浏览器中。"
  ],
  "첫 번째 작품을 기다립니다.": [
    "첫 번째 작품을 기다립니다.",
    "最初の作品をお待ちしています。",
    "Your first exhibit awaits.",
    "Đang chờ tác phẩm đầu tiên.",
    "等待第一件作品。"
  ],
  "기획서를 만들고 프로젝트에서 대표 이미지를 추가해 보세요.": [
    "기획서를 만들고 프로젝트에서 대표 이미지를 추가해 보세요.",
    "企画書を作成し、プロジェクトで代表画像を追加してください。",
    "Create a proposal, then add a cover image in Projects.",
    "Tạo kế hoạch rồi thêm ảnh đại diện trong Dự án.",
    "创建策划书，再在项目页添加封面图片。"
  ],
  "고정됨": [
    "고정됨",
    "固定済み",
    "Pinned",
    "Đã ghim",
    "已置顶"
  ],
  "최근 저장": [
    "최근 저장",
    "最近保存",
    "Recently saved",
    "Lưu gần đây",
    "最近保存"
  ],
  "대표 이미지 추가": [
    "대표 이미지 추가",
    "代表画像を追加",
    "Add cover image",
    "Thêm ảnh đại diện",
    "添加封面"
  ],
  "대표 이미지": [
    "대표 이미지",
    "代表画像",
    "Cover image",
    "Ảnh đại diện",
    "封面图片"
  ],
  "이미지 파일 올리기": [
    "이미지 파일 올리기",
    "画像ファイルをアップロード",
    "Upload an image",
    "Tải ảnh lên",
    "上传图片"
  ],
  "이미지 주소 저장": [
    "이미지 주소 저장",
    "画像URLを保存",
    "Save image URL",
    "Lưu địa chỉ ảnh",
    "保存图片地址"
  ],
  "이미지 주소": [
    "이미지 주소",
    "画像URL",
    "Image URL",
    "Địa chỉ ảnh",
    "图片地址"
  ],
  "이미지 삭제": [
    "이미지 삭제",
    "画像を削除",
    "Remove image",
    "Xóa ảnh",
    "移除图片"
  ],
  "갤러리에 고정": [
    "갤러리에 고정",
    "ギャラリーに固定",
    "Pin to gallery",
    "Ghim vào phòng trưng bày",
    "置顶到展厅"
  ],
  "고정 해제": [
    "고정 해제",
    "固定解除",
    "Unpin",
    "Bỏ ghim",
    "取消置顶"
  ],
  "이미지와 고정 설정을 저장했습니다.": [
    "이미지와 고정 설정을 저장했습니다.",
    "画像・固定設定を保存しました。",
    "Image and pin settings saved.",
    "Đã lưu ảnh và thiết lập ghim.",
    "图片与置顶设置已保存。"
  ],
  "저장하지 못했습니다. 저장 공간이나 다른 페이지의 변경 사항을 확인해 주세요.": [
    "저장하지 못했습니다. 저장 공간이나 다른 페이지의 변경 사항을 확인해 주세요.",
    "保存できませんでした。保存領域や他のページでの変更をご確認ください。",
    "Could not save. Check storage or changes made in another tab.",
    "Không thể lưu. Kiểm tra bộ nhớ hoặc thay đổi ở tab khác.",
    "保存失败，请检查存储空间或其他页面的修改。"
  ],
  "1MB 이하의 JPG·PNG·WebP 이미지를 선택해 주세요. 큰 이미지는 GitHub에 올린 뒤 이미지 주소로 연결할 수 있습니다.": [
    "1MB 이하의 JPG·PNG·WebP 이미지를 선택해 주세요. 큰 이미지는 GitHub에 올린 뒤 이미지 주소로 연결할 수 있습니다.",
    "1MB以下のJPG・PNG・WebPを選択してください。大きい画像はGitHubにアップロードしてURLを指定できます。",
    "Choose a JPG, PNG or WebP under 1 MB. For larger images, upload to GitHub and use an image URL.",
    "Chọn JPG, PNG hoặc WebP dưới 1 MB. Với ảnh lớn, tải lên GitHub rồi dùng địa chỉ ảnh.",
    "请选择1MB以下的JPG、PNG或WebP图片。大图可上传GitHub后使用图片地址。"
  ],
  "사용할 수 있는 이미지 주소를 입력해 주세요.": [
    "사용할 수 있는 이미지 주소를 입력해 주세요.",
    "有効な画像URLを入力してください。",
    "Enter a valid image URL.",
    "Nhập địa chỉ ảnh hợp lệ.",
    "请输入有效的图片地址。"
  ],
  "갤러리를 불러오지 못했습니다. 저장된 프로젝트는 변경하지 않았습니다.": [
    "갤러리를 불러오지 못했습니다. 저장된 프로젝트는 변경하지 않았습니다.",
    "ギャラリーを読み込めませんでした。保存済みプロジェクトは変更していません。",
    "Could not load the gallery. Saved projects have not been changed.",
    "Không tải được phòng trưng bày. Dự án đã lưu chưa bị thay đổi.",
    "无法加载展厅，已保存项目未作更改。"
  ],
  "전시할 프로젝트가 없습니다.": [
    "전시할 프로젝트가 없습니다.",
    "展示するプロジェクトはありません。",
    "No projects to exhibit yet.",
    "Chưa có dự án để trưng bày.",
    "暂无可展示的项目。"
  ]
};
