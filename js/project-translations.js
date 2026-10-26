'use strict';
const projectTranslations = {
  "PDF 다운로드 ↓": ["PDF 다운로드 ↓", "PDFをダウンロード ↓", "Download PDF ↓", "Tải PDF ↓", "下载 PDF ↓"],
  "PDF를 만드는 중입니다.": ["PDF를 만드는 중입니다.", "PDFを作成中です。", "Creating PDF…", "Đang tạo PDF…", "正在生成 PDF…"],
  "PDF 다운로드를 시작했습니다.": ["PDF 다운로드를 시작했습니다.", "PDFのダウンロードを開始しました。", "PDF download started.", "Đã bắt đầu tải PDF.", "已开始下载 PDF。"],
  "PDF를 만들지 못했습니다. 다시 시도해 주세요.": ["PDF를 만들지 못했습니다. 다시 시도해 주세요.", "PDFを作成できませんでした。もう一度お試しください。", "Could not create the PDF. Please try again.", "Không thể tạo PDF. Vui lòng thử lại.", "无法生成 PDF，请重试。"],
  "유학 경험 · 마인드맵 기반": ["유학 경험 · 마인드맵 기반", "留学経験・マインドマップより", "Study abroad · from mind map", "Du học · từ sơ đồ tư duy", "留学经历 · 基于思维导图"],
  "유학 경험 · 내 수정본": ["유학 경험 · 내 수정본", "留学経験・自分の編集版", "Study abroad · my edited version", "Du học · bản tôi đã chỉnh sửa", "留学经历 · 我的修改版"],
  "수정 내용 저장": ["수정 내용 저장", "変更を保存", "Save changes", "Lưu thay đổi", "保存修改"],
  "유학 시절의 이벤트 기획서와 직접 만든 프로젝트를 모아 관리합니다.": ["유학 시절의 이벤트 기획서와 직접 만든 프로젝트를 모아 관리합니다.", "留学中のイベント企画書と自分で作成したプロジェクトをまとめて管理します。", "Browse proposals based on study-abroad events alongside projects you create.", "Quản lý các đề xuất dựa trên sự kiện thời du học cùng những dự án bạn tự tạo.", "集中管理留学期间活动的策划书和自行创建的项目。"],
  "유학 경험 기획서는 공개 원본입니다. 새 프로젝트와 수정·삭제·이미지 설정은 이 브라우저에만 저장됩니다. 다른 기기에는 반영되지 않으니 중요한 내용은 다운로드해 주세요.": ["유학 경험 기획서는 공개 원본입니다. 새 프로젝트와 수정·삭제·이미지 설정은 이 브라우저에만 저장됩니다. 다른 기기에는 반영되지 않으니 중요한 내용은 다운로드해 주세요.", "留学経験の企画書は公開版です。新しいプロジェクトや編集・削除・画像設定はこのブラウザーだけに保存され、他の端末には反映されません。重要な内容はダウンロードしてください。", "The original study-abroad proposals are public. New projects, edits, deletions and image settings are stored only in this browser and do not sync to other devices. Download important work for safekeeping.", "Các đề xuất gốc về trải nghiệm du học được công khai. Dự án mới, chỉnh sửa, xóa và thiết lập hình ảnh chỉ lưu trong trình duyệt này, không đồng bộ sang thiết bị khác. Hãy tải nội dung quan trọng để lưu giữ.", "留学经历策划书的原始版本公开展示。新项目、修改、删除和图片设置仅保存在此浏览器，不会同步到其他设备。请下载重要内容以便保存。"],

  "내 기획 프로젝트": [
    "내 기획 프로젝트",
    "自分の企画プロジェクト",
    "My planning projects",
    "Dự án kế hoạch của tôi",
    "我的策划项目"
  ],
  "기획서 작성 툴에서 만든 초안을 프로젝트로 모아 관리합니다.": [
    "기획서 작성 툴에서 만든 초안을 프로젝트로 모아 관리합니다.",
    "企画書ツールで作成した下書きをプロジェクトとして管理します。",
    "Manage proposals from the plan builder as projects.",
    "Quản lý các bản nháp từ công cụ lập kế hoạch dưới dạng dự án.",
    "将策划书工具生成的初稿作为项目管理。"
  ],
  "프로젝트는 이 브라우저에만 저장됩니다. 다른 기기와 공유되지 않으며, 브라우저 데이터를 지우면 삭제됩니다. 중요한 내용은 다운로드해 보관해 주세요.": [
    "프로젝트는 이 브라우저에만 저장됩니다. 다른 기기와 공유되지 않으며, 브라우저 데이터를 지우면 삭제됩니다. 중요한 내용은 다운로드해 보관해 주세요.",
    "プロジェクトはこのブラウザーのみに保存されます。他の端末とは共有されず、ブラウザーデータを消すと削除されます。重要な内容はダウンロードしてください。",
    "Projects are stored only in this browser, not shared across devices. Clearing browser data removes them. Download important work for safekeeping.",
    "Dự án chỉ lưu trong trình duyệt này, không chia sẻ giữa các thiết bị. Xóa dữ liệu trình duyệt sẽ xóa dự án. Hãy tải nội dung quan trọng để lưu giữ.",
    "项目仅保存在此浏览器中，不跨设备共享。清除浏览器数据会删除项目，请下载重要内容。"
  ],
  "새 기획서 작성": [
    "새 기획서 작성",
    "新しい企画書を作成",
    "Create a new proposal",
    "Tạo kế hoạch mới",
    "新建策划书"
  ],
  "아직 저장된 프로젝트가 없습니다.": [
    "아직 저장된 프로젝트가 없습니다.",
    "保存済みのプロジェクトはありません。",
    "No projects saved yet.",
    "Chưa có dự án nào được lưu.",
    "暂无已保存项目。"
  ],
  "기획서 작성 툴에서 초안을 만들면 제목과 입력 내용, 기획서가 여기에 자동으로 저장됩니다.": [
    "기획서 작성 툴에서 초안을 만들면 제목과 입력 내용, 기획서가 여기에 자동으로 저장됩니다.",
    "企画書ツールで下書きを作ると、タイトル、入力内容、企画書がここに自動保存されます。",
    "Generate a proposal in the plan builder to automatically save its title, inputs and draft here.",
    "Tạo bản nháp trong công cụ để tự động lưu tiêu đề, thông tin và kế hoạch tại đây.",
    "在策划书工具中生成初稿后，标题、输入内容与策划书会自动保存在这里。"
  ],
  "초안을 만들면 프로젝트에 자동 저장됩니다. 생성 후 초안의 수정 내용도 저장됩니다.": [
    "초안을 만들면 프로젝트에 자동 저장됩니다. 생성 후 초안의 수정 내용도 저장됩니다.",
    "作成した下書きはプロジェクトに自動保存されます。作成後の下書きの編集も保存されます。",
    "Generated drafts are automatically saved as projects, including subsequent edits to the draft.",
    "Bản nháp được tự động lưu thành dự án, bao gồm các chỉnh sửa bản nháp sau đó.",
    "生成的初稿自动保存为项目，之后对初稿的编辑也会保存。"
  ],
  "저장한 프로젝트 보기": [
    "저장한 프로젝트 보기",
    "保存したプロジェクトを見る",
    "View saved projects",
    "Xem dự án đã lưu",
    "查看已保存项目"
  ],
  "프로젝트에 저장했습니다.": [
    "프로젝트에 저장했습니다.",
    "プロジェクトに保存しました。",
    "Saved to projects.",
    "Đã lưu vào dự án.",
    "已保存到项目。"
  ],
  "프로젝트 수정 내용을 저장했습니다.": [
    "프로젝트 수정 내용을 저장했습니다.",
    "プロジェクトの編集を保存しました。",
    "Project edits saved.",
    "Đã lưu chỉnh sửa dự án.",
    "项目修改已保存。"
  ],
  "저장하지 못했습니다. 현재 초안을 다운로드해 보관해 주세요.": [
    "저장하지 못했습니다. 현재 초안을 다운로드해 보관해 주세요.",
    "保存できませんでした。現在の下書きをダウンロードしてください。",
    "Could not save. Download the current draft to keep it safe.",
    "Không thể lưu. Hãy tải bản nháp hiện tại để lưu giữ.",
    "保存失败，请下载当前初稿以免丢失。"
  ],
  "프로젝트를 불러왔습니다. 초안을 수정하거나 새로 생성할 수 있습니다.": [
    "프로젝트를 불러왔습니다. 초안을 수정하거나 새로 생성할 수 있습니다.",
    "プロジェクトを読み込みました。下書きの編集や再作成ができます。",
    "Project loaded. Edit the draft or regenerate it.",
    "Đã tải dự án. Bạn có thể sửa hoặc tạo lại bản nháp.",
    "项目已加载，可以修改或重新生成初稿。"
  ],
  "프로젝트를 찾을 수 없습니다. 같은 브라우저에서 프로젝트 목록을 확인해 주세요.": [
    "프로젝트를 찾을 수 없습니다. 같은 브라우저에서 프로젝트 목록을 확인해 주세요.",
    "プロジェクトが見つかりません。同じブラウザーで一覧をご確認ください。",
    "Project not found. Check the project list in the same browser.",
    "Không tìm thấy dự án. Hãy kiểm tra danh sách trong cùng trình duyệt.",
    "未找到项目，请在同一浏览器中查看项目列表。"
  ],
  "저장된 프로젝트를 읽을 수 없습니다. 브라우저 저장 공간 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았습니다.": [
    "저장된 프로젝트를 읽을 수 없습니다. 브라우저 저장 공간 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았습니다.",
    "保存済みプロジェクトを読み込めません。ブラウザーのストレージ設定をご確認ください。既存データは上書きしていません。",
    "Could not read projects. Check browser storage settings. Existing data has not been overwritten.",
    "Không đọc được dự án. Hãy kiểm tra cài đặt lưu trữ trình duyệt. Dữ liệu cũ chưa bị ghi đè.",
    "无法读取项目，请检查浏览器存储设置。现有数据未被覆盖。"
  ],
  "프로젝트 상세 보기": [
    "프로젝트 상세 보기",
    "プロジェクトの詳細",
    "Project details",
    "Chi tiết dự án",
    "项目详情"
  ],
  "수정하기": [
    "수정하기",
    "編集する",
    "Edit project",
    "Sửa dự án",
    "编辑项目"
  ],
  "삭제": [
    "삭제",
    "削除",
    "Delete",
    "Xóa",
    "删除"
  ],
  "이 프로젝트를 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.": [
    "이 프로젝트를 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.",
    "このプロジェクトを削除しますか？元には戻せません。",
    "Delete this project? This cannot be undone.",
    "Xóa dự án này? Không thể hoàn tác.",
    "删除此项目？此操作无法撤销。"
  ],
  "프로젝트를 삭제했습니다.": [
    "프로젝트를 삭제했습니다.",
    "プロジェクトを削除しました。",
    "Project deleted.",
    "Đã xóa dự án.",
    "项目已删除。"
  ],
  "삭제하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.": [
    "삭제하지 못했습니다. 브라우저 저장 공간을 확인해 주세요.",
    "削除できませんでした。ブラウザーのストレージをご確認ください。",
    "Could not delete. Check browser storage settings.",
    "Không thể xóa. Hãy kiểm tra bộ nhớ trình duyệt.",
    "删除失败，请检查浏览器存储设置。"
  ],
  "마지막 저장": [
    "마지막 저장",
    "最終保存",
    "Last saved",
    "Lưu lần cuối",
    "最后保存"
  ],
  "미입력": [
    "미입력",
    "未入力",
    "Not provided",
    "Chưa nhập",
    "未填写"
  ],
  "기획서 작성 내용은 페이지를 새로고침해도 프로젝트에서 다시 열 수 있습니다. 생성 전 입력은 저장되지 않습니다.": [
    "기획서 작성 내용은 페이지를 새로고침해도 프로젝트에서 다시 열 수 있습니다. 생성 전 입력은 저장되지 않습니다.",
    "作成済み企画書は再読み込み後もプロジェクトから開けます。作成前の入力は保存されません。",
    "Generated proposals can be reopened from Projects after refresh. Inputs are not saved until a draft is generated.",
    "Kế hoạch đã tạo có thể mở lại từ Dự án sau khi tải lại trang. Thông tin chưa tạo bản nháp không được lưu.",
    "已生成的策划书可在刷新后从项目页重新打开，生成前的输入不会保存。"
  ],
  "이 프로젝트는 다른 페이지에서 변경되었거나 삭제되어 저장할 수 없습니다. 현재 초안을 다운로드해 주세요.": [
    "이 프로젝트는 다른 페이지에서 변경되었거나 삭제되어 저장할 수 없습니다. 현재 초안을 다운로드해 주세요.",
    "別のページで変更または削除されたため保存できません。現在の下書きをダウンロードしてください。",
    "This project was changed or deleted in another page. Download your current draft before reloading.",
    "Dự án đã thay đổi hoặc bị xóa ở trang khác. Hãy tải bản nháp hiện tại trước khi tải lại.",
    "此项目已在另一页面更改或删除，请先下载当前初稿。"
  ]
};
