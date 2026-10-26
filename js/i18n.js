'use strict';
const translations = {
  "새 기획서 작성": ["새 기획서 작성", "新しい企画書を作成", "Create a proposal", "Tạo bản đề xuất", "创建策划书"],
  "김도현 — 마케팅 · 기획": [
    "김도현 — 마케팅 · 기획",
    "キム・ドヒョン — マーケティング・企画",
    "KIM DOHYEON — Marketing & Planning",
    "KIM DOHYEON — Marketing & Lập kế hoạch",
    "KIM DOHYEON — 营销与策划"
  ],
  "본문으로 이동": [
    "본문으로 이동",
    "本文へスキップ",
    "Skip to content",
    "Đi đến nội dung",
    "跳转到正文"
  ],
  "도현": [
    "도현",
    "ドヒョン",
    "KIM DOHYEON",
    "KIM DOHYEON",
    "KIM DOHYEON"
  ],
  "소개": [
    "소개",
    "紹介",
    "About",
    "Giới thiệu",
    "介绍"
  ],
  "관심 분야": [
    "관심 분야",
    "関心分野",
    "Interests",
    "Mối quan tâm",
    "兴趣领域"
  ],
  "프로젝트": [
    "프로젝트",
    "プロジェクト",
    "Projects",
    "Dự án",
    "项目"
  ],
  "연락처": [
    "연락처",
    "連絡先",
    "Contact",
    "Liên hệ",
    "联系"
  ],
  "자기소개": [
    "자기소개",
    "自己紹介",
    "About me",
    "Về tôi",
    "自我介绍"
  ],
  "기획서 작성 툴": [
    "기획서 작성 툴",
    "企画書作成ツール",
    "Plan builder",
    "Công cụ lập kế hoạch",
    "策划书工具"
  ],
  "사람을 이해하고,": [
    "사람을 이해하고,",
    "人を理解し、",
    "Understanding people.",
    "Thấu hiểu con người.",
    "理解人们，"
  ],
  "아이디어를": [
    "아이디어를",
    "アイデアを",
    "Turning ideas",
    "Biến ý tưởng",
    "让创意"
  ],
  "기획으로.": [
    "기획으로.",
    "企画へ。",
    "into plans.",
    "thành kế hoạch.",
    "成为方案。"
  ],
  "안녕하세요, 대학생": [
    "안녕하세요, 대학생",
    "こんにちは。大学生の",
    "Hello! I'm",
    "Xin chào! Tôi là",
    "你好，我是大学生"
  ],
  "김도현": [
    "김도현",
    "キム・ドヒョン",
    "KIM DOHYEON",
    "KIM DOHYEON",
    "KIM DOHYEON"
  ],
  "입니다.": [
    "입니다.",
    "です。",
    ", a university student.",
    ", một sinh viên đại học.",
    "。"
  ],
  "마케팅과 기획 분야로 나아가는 저를 소개합니다.": [
    "마케팅과 기획 분야로 나아가는 저를 소개합니다.",
    "マーケティングと企画の分野を目指す私をご紹介します。",
    "Exploring a future in marketing and planning.",
    "Tôi đang hướng đến lĩnh vực marketing và lập kế hoạch.",
    "我正在向营销与策划领域迈进。"
  ],
  "저를 소개합니다": [
    "저를 소개합니다",
    "自己紹介を見る",
    "Get to know me",
    "Tìm hiểu về tôi",
    "了解我"
  ],
  "사람과 브랜드 사이": [
    "사람과 브랜드 사이",
    "人とブランドの間に",
    "Between people and brands",
    "Giữa con người và thương hiệu",
    "连接人与品牌"
  ],
  "아이디어에서 시작하기": [
    "아이디어에서 시작하기",
    "アイデアから始める",
    "Starting with an idea",
    "Bắt đầu từ một ý tưởng",
    "从创意出发"
  ],
  "마케팅 · 기획 분야 지원": [
    "마케팅 · 기획 분야 지원",
    "志望分野：マーケティング・企画",
    "Seeking marketing & planning opportunities",
    "Định hướng: Marketing & Lập kế hoạch",
    "求职方向：营销与策划"
  ],
  "안녕하세요,": [
    "안녕하세요,",
    "こんにちは、",
    "Hello,",
    "Xin chào,",
    "你好，"
  ],
  "김도현입니다": [
    "김도현입니다",
    "キム・ドヒョンです",
    "I'm KIM DOHYEON",
    "Tôi là KIM DOHYEON",
    "我是KIM DOHYEON"
  ],
  "마케팅과 기획을 향해": [
    "마케팅과 기획을 향해",
    "マーケティングと企画へ、",
    "A university student taking",
    "Một sinh viên đang bước đầu",
    "我是一名大学生，"
  ],
  "첫걸음을 내딛는 대학생입니다.": [
    "첫걸음을 내딛는 대학생입니다.",
    "第一歩を踏み出す大学生です。",
    "my first steps in marketing and planning.",
    "đến với marketing và lập kế hoạch.",
    "正迈出营销与策划的第一步。"
  ],
  "저의 관심 분야와 앞으로 채워갈 경험을 한곳에 담았습니다.": [
    "저의 관심 분야와 앞으로 채워갈 경험을 한곳에 담았습니다.",
    "関心分野とこれから積み重ねる経験をここにまとめました。",
    "A space for my interests and the experiences ahead.",
    "Nơi ghi lại mối quan tâm và những trải nghiệm sắp tới của tôi.",
    "这里汇集了我的兴趣领域和未来的经历。"
  ],
  "배움과 프로젝트를 통해 이 페이지를 차근차근 채워가려 합니다.": [
    "배움과 프로젝트를 통해 이 페이지를 차근차근 채워가려 합니다.",
    "学びとプロジェクトを通じて、少しずつこのページを充実させていきます。",
    "I'll keep adding to this page as I learn and work on projects.",
    "Tôi sẽ dần bổ sung trang này qua việc học và các dự án.",
    "我会通过学习和项目逐步丰富这个页面。"
  ],
  "이름": [
    "이름",
    "名前",
    "Name",
    "Họ tên",
    "姓名"
  ],
  "현재": [
    "현재",
    "現在",
    "Currently",
    "Hiện tại",
    "目前"
  ],
  "대학생": [
    "대학생",
    "大学生",
    "University student",
    "Sinh viên đại học",
    "大学生"
  ],
  "지원 분야": [
    "지원 분야",
    "志望分野",
    "Focus",
    "Định hướng",
    "求职方向"
  ],
  "마케팅 · 기획": [
    "마케팅 · 기획",
    "マーケティング・企画",
    "Marketing & Planning",
    "Marketing & Lập kế hoạch",
    "营销与策划"
  ],
  "제가 향하는 방향": [
    "제가 향하는 방향",
    "目指す方向",
    "Where I'm headed",
    "Hướng đi của tôi",
    "我的方向"
  ],
  "관심에서 시작해, 경험으로 넓혀갑니다.": [
    "관심에서 시작해, 경험으로 넓혀갑니다.",
    "関心から始め、経験を通じて広げていきます。",
    "Starting with curiosity, growing through experience.",
    "Bắt đầu từ sự quan tâm, mở rộng qua trải nghiệm.",
    "从兴趣出发，在经历中成长。"
  ],
  "마케팅": [
    "마케팅",
    "マーケティング",
    "Marketing",
    "Marketing",
    "营销"
  ],
  "사람과 브랜드를 연결하는 방법에 관심을 두고 있습니다.": [
    "사람과 브랜드를 연결하는 방법에 관심을 두고 있습니다.",
    "人とブランドをつなぐ方法に関心があります。",
    "I'm interested in how people connect with brands.",
    "Tôi quan tâm đến cách kết nối con người với thương hiệu.",
    "我关注如何连接人与品牌。"
  ],
  "브랜드": [
    "브랜드",
    "ブランド",
    "Branding",
    "Thương hiệu",
    "品牌"
  ],
  "콘텐츠": [
    "콘텐츠",
    "コンテンツ",
    "Content",
    "Nội dung",
    "内容"
  ],
  "소비자 이해": [
    "소비자 이해",
    "消費者理解",
    "Consumer insights",
    "Hiểu người tiêu dùng",
    "消费者洞察"
  ],
  "기획": [
    "기획",
    "企画",
    "Planning",
    "Lập kế hoạch",
    "策划"
  ],
  "아이디어를 정리하고, 구체적인 방향으로 만들어가는 일에 관심이 있습니다.": [
    "아이디어를 정리하고, 구체적인 방향으로 만들어가는 일에 관심이 있습니다.",
    "アイデアを整理し、具体的な方向性へと形にすることに関心があります。",
    "I enjoy exploring how ideas can become concrete plans.",
    "Tôi quan tâm đến việc sắp xếp ý tưởng và định hình hướng đi cụ thể.",
    "我关注如何整理创意并将其转化为具体方向。"
  ],
  "아이디어": [
    "아이디어",
    "アイデア",
    "Ideas",
    "Ý tưởng",
    "创意"
  ],
  "문제 정의": [
    "문제 정의",
    "課題設定",
    "Problem definition",
    "Xác định vấn đề",
    "问题定义"
  ],
  "전략": [
    "전략",
    "戦略",
    "Strategy",
    "Chiến lược",
    "策略"
  ],
  "경험을 쌓아가는 중": [
    "경험을 쌓아가는 중",
    "経験を積み重ねる途中",
    "Building experience",
    "Tích lũy trải nghiệm",
    "积累经验中"
  ],
  "업데이트 예정": [
    "업데이트 예정",
    "更新予定",
    "Coming soon",
    "Sắp cập nhật",
    "即将更新"
  ],
  "다음 이야기를 준비하고 있습니다.": [
    "다음 이야기를 준비하고 있습니다.",
    "次のストーリーを準備しています。",
    "The next story is taking shape.",
    "Câu chuyện tiếp theo đang được chuẩn bị.",
    "正在准备下一段故事。"
  ],
  "수업 과제, 팀 프로젝트, 대외활동 등 소개할 경험이 추가될 공간입니다.": [
    "수업 과제, 팀 프로젝트, 대외활동 등 소개할 경험이 추가될 공간입니다.",
    "授業の課題やチームプロジェクト、課外活動などを紹介する予定です。",
    "A space for coursework, team projects and extracurricular experiences.",
    "Nơi chia sẻ bài tập, dự án nhóm và hoạt động ngoại khóa.",
    "这里将展示课程作业、团队项目和课外活动。"
  ],
  "새로운 연결을": [
    "새로운 연결을",
    "新しいつながりを",
    "Looking forward",
    "Mong chờ",
    "期待"
  ],
  "기다립니다": [
    "기다립니다",
    "待っています",
    "to new connections",
    "những kết nối mới",
    "新的连接"
  ],
  "마케팅과 기획으로 시작할 다음 이야기를 기대합니다.": [
    "마케팅과 기획으로 시작할 다음 이야기를 기대합니다.",
    "マーケティングと企画から始まる次のストーリーを楽しみにしています。",
    "Looking forward to the next chapter in marketing and planning.",
    "Tôi mong đợi chương tiếp theo trong marketing và lập kế hoạch.",
    "期待在营销与策划中开启下一段故事。"
  ],
  "이메일 · 소셜 링크는 공개 준비 중입니다.": [
    "이메일 · 소셜 링크는 공개 준비 중입니다.",
    "メール・SNSリンクは公開準備中です。",
    "Email and social links will be added soon.",
    "Email và liên kết mạng xã hội sẽ được bổ sung sau.",
    "邮箱和社交链接准备公开中。"
  ],
  "기획서로 정리하세요.": [
    "기획서로 정리하세요.",
    "企画書にまとめましょう。",
    "into a clear proposal.",
    "thành bản kế hoạch rõ ràng.",
    "成为清晰的策划书。"
  ],
  "핵심 내용을 입력하면 목적부터 실행 계획까지 초안으로 정리해 드립니다.": [
    "핵심 내용을 입력하면 목적부터 실행 계획까지 초안으로 정리해 드립니다.",
    "要点を入力すると、目的から実行計画までを下書きに整理します。",
    "Enter your key details to draft a proposal, from objectives to execution.",
    "Nhập nội dung chính để tạo bản nháp từ mục tiêu đến triển khai.",
    "输入核心内容，生成从目标到执行计划的初稿。"
  ],
  "입력 기반 템플릿 도구이며, 결과는 검토 후 활용해 주세요. 입력 내용은 서버로 전송하지 않습니다.": [
    "입력 기반 템플릿 도구이며, 결과는 검토 후 활용해 주세요. 입력 내용은 서버로 전송하지 않습니다.",
    "入力に基づくテンプレートツールです。結果は確認してご利用ください。入力内容はサーバーに送信されません。",
    "This template uses your input. Review the draft before use. Your input is not sent to a server.",
    "Công cụ dùng mẫu dựa trên thông tin bạn nhập. Hãy kiểm tra trước khi sử dụng. Dữ liệu không được gửi lên máy chủ.",
    "本工具基于输入套用模板，请审核后使用。输入内容不会发送到服务器。"
  ],
  "기획 주제": [
    "기획 주제",
    "企画テーマ",
    "Proposal title",
    "Chủ đề kế hoạch",
    "策划主题"
  ],
  "(필수)": [
    "(필수)",
    "（必須）",
    "(required)",
    "(bắt buộc)",
    "（必填）"
  ],
  "기획 유형": [
    "기획 유형",
    "企画の種類",
    "Proposal type",
    "Loại kế hoạch",
    "策划类型"
  ],
  "마케팅 캠페인": [
    "마케팅 캠페인",
    "マーケティング施策",
    "Marketing campaign",
    "Chiến dịch marketing",
    "营销活动"
  ],
  "행사 · 이벤트": [
    "행사 · 이벤트",
    "イベント",
    "Event",
    "Sự kiện",
    "活动策划"
  ],
  "서비스 · 콘텐츠": [
    "서비스 · 콘텐츠",
    "サービス・コンテンツ",
    "Service / content",
    "Dịch vụ / Nội dung",
    "服务与内容"
  ],
  "배경과 해결할 문제": [
    "배경과 해결할 문제",
    "背景と解決する課題",
    "Background and problem",
    "Bối cảnh và vấn đề",
    "背景与待解决的问题"
  ],
  "달성 목표": [
    "달성 목표",
    "達成目標",
    "Objectives",
    "Mục tiêu",
    "目标"
  ],
  "대상": [
    "대상",
    "対象",
    "Target audience",
    "Đối tượng",
    "目标群体"
  ],
  "핵심 아이디어 · 실행 내용": [
    "핵심 아이디어 · 실행 내용",
    "中心となるアイデア・実施内容",
    "Core idea and activities",
    "Ý tưởng và hoạt động chính",
    "核心创意与执行内容"
  ],
  "예산": [
    "예산",
    "予算",
    "Budget",
    "Ngân sách",
    "预算"
  ],
  "기간": [
    "기간",
    "期間",
    "Timeframe",
    "Thời gian",
    "周期"
  ],
  "성과 측정 지표": [
    "성과 측정 지표",
    "成果指標",
    "Success metrics",
    "Chỉ số đánh giá",
    "成效指标"
  ],
  "기획서 초안 만들기": [
    "기획서 초안 만들기",
    "企画書の下書きを作成",
    "Generate draft",
    "Tạo bản nháp",
    "生成策划书初稿"
  ],
  "기획서 초안": [
    "기획서 초안",
    "企画書の下書き",
    "Proposal draft",
    "Bản nháp kế hoạch",
    "策划书初稿"
  ],
  "입력 대기 중": [
    "입력 대기 중",
    "入力待ち",
    "Ready for input",
    "Chờ nhập thông tin",
    "等待输入"
  ],
  "왼쪽 내용을 입력하고 초안 만들기를 눌러 주세요. 생성 후에도 직접 수정할 수 있습니다.": [
    "왼쪽 내용을 입력하고 초안 만들기를 눌러 주세요. 생성 후에도 직접 수정할 수 있습니다.",
    "フォームに入力して作成ボタンを押してください。作成後も編集できます。",
    "Fill in the form and generate a draft. You can edit it afterwards.",
    "Điền biểu mẫu rồi tạo bản nháp. Bạn có thể chỉnh sửa sau đó.",
    "填写表单并生成初稿，生成后仍可手动修改。"
  ],
  "기획서 내용 (직접 수정 가능)": [
    "기획서 내용 (직접 수정 가능)",
    "企画書の内容（編集可能）",
    "Proposal text (editable)",
    "Nội dung kế hoạch (có thể sửa)",
    "策划书内容（可编辑）"
  ],
  "내용 복사": [
    "내용 복사",
    "内容をコピー",
    "Copy text",
    "Sao chép",
    "复制内容"
  ],
  "텍스트 다운로드 ↓": [
    "텍스트 다운로드 ↓",
    "テキストを保存 ↓",
    "Download text ↓",
    "Tải văn bản ↓",
    "下载文本 ↓"
  ],
  "입력과 초안은 새로고침하면 사라집니다. 필요한 결과는 다운로드해 보관해 주세요.": [
    "입력과 초안은 새로고침하면 사라집니다. 필요한 결과는 다운로드해 보관해 주세요.",
    "再読み込みすると入力と下書きは消えます。必要な結果はダウンロードしてください。",
    "Inputs and drafts are cleared on refresh. Download anything you want to keep.",
    "Thông tin và bản nháp sẽ mất khi tải lại trang. Hãy tải kết quả để lưu giữ.",
    "刷新页面后输入和初稿会清空，请下载保存需要的结果。"
  ],
  "© 김도현. All rights reserved.": [
    "© 김도현. All rights reserved.",
    "© キム・ドヒョン. All rights reserved.",
    "© KIM DOHYEON. All rights reserved.",
    "© KIM DOHYEON. All rights reserved.",
    "© KIM DOHYEON. All rights reserved."
  ],
  "맨 위로": [
    "맨 위로",
    "トップへ",
    "Back to top",
    "Về đầu trang",
    "返回顶部"
  ],
  "예: 대학생 대상 친환경 텀블러 캠페인": [
    "예: 대학생 대상 친환경 텀블러 캠페인",
    "例：大学生向けのエコタンブラー施策",
    "E.g. reusable cup campaign for university students",
    "VD: Chiến dịch dùng cốc tái sử dụng cho sinh viên",
    "例如：面向大学生的环保杯活动"
  ],
  "왜 이 기획이 필요한가요?": [
    "왜 이 기획이 필요한가요?",
    "なぜこの企画が必要ですか？",
    "Why is this proposal needed?",
    "Vì sao cần kế hoạch này?",
    "为什么需要这项策划？"
  ],
  "예: 4주 동안 캠페인 참여자 100명 모집": [
    "예: 4주 동안 캠페인 참여자 100명 모집",
    "例：4週間で参加者100名を募集",
    "E.g. recruit 100 participants in four weeks",
    "VD: Thu hút 100 người tham gia trong 4 tuần",
    "例如：4周内招募100名参与者"
  ],
  "예: 환경에 관심 있는 대학생": [
    "예: 환경에 관심 있는 대학생",
    "例：環境に関心のある大学生",
    "E.g. environmentally conscious university students",
    "VD: Sinh viên quan tâm đến môi trường",
    "例如：关注环保的大学生"
  ],
  "진행하고 싶은 활동이나 전달할 메시지를 적어 주세요.": [
    "진행하고 싶은 활동이나 전달할 메시지를 적어 주세요.",
    "実施したい活動や伝えたいメッセージを入力してください。",
    "Describe your activities or key message.",
    "Mô tả hoạt động hoặc thông điệp bạn muốn truyền tải.",
    "请描述希望开展的活动或传达的信息。"
  ],
  "예: 총 50만 원": [
    "예: 총 50만 원",
    "例：合計5万円",
    "E.g. total budget of $500",
    "VD: Tổng ngân sách 5 triệu đồng",
    "例如：总预算5000元"
  ],
  "예: 4주 / 11월 1~28일": [
    "예: 4주 / 11월 1~28일",
    "例：4週間／11月1〜28日",
    "E.g. four weeks / November 1–28",
    "VD: 4 tuần / từ 1–28 tháng 11",
    "例如：4周／11月1日至28日"
  ],
  "예: 참여자 수, 신청 전환율": [
    "예: 참여자 수, 신청 전환율",
    "例：参加者数、申込転換率",
    "E.g. participant count, registration conversion rate",
    "VD: Số người tham gia, tỷ lệ đăng ký",
    "例如：参与人数、报名转化率"
  ],
  "기획서가 여기에 표시됩니다.": [
    "기획서가 여기에 표시됩니다.",
    "企画書がここに表示されます。",
    "Your proposal will appear here.",
    "Kế hoạch sẽ hiển thị tại đây.",
    "策划书将显示在这里。"
  ],
  "주 메뉴": [
    "주 메뉴",
    "メインメニュー",
    "Main navigation",
    "Điều hướng chính",
    "主导航"
  ],
  "사이트 콘텐츠": [
    "사이트 콘텐츠",
    "サイトのコンテンツ",
    "Site content",
    "Nội dung trang",
    "网站内容"
  ],
  "김도현 홈": [
    "김도현 홈",
    "キム・ドヒョン ホーム",
    "KIM DOHYEON home",
    "Trang chủ KIM DOHYEON",
    "KIM DOHYEON主页"
  ],
  "마케팅과 기획을 연결하는 그래픽": [
    "마케팅과 기획을 연결하는 그래픽",
    "マーケティングと企画をつなぐグラフィック",
    "Graphic connecting marketing and planning",
    "Đồ họa kết nối marketing và lập kế hoạch",
    "连接营销与策划的图形"
  ],
  "현재 초안을 새로 작성할까요? 직접 수정한 내용도 바뀝니다.": [
    "현재 초안을 새로 작성할까요? 직접 수정한 내용도 바뀝니다.",
    "現在の下書きを作り直しますか？編集内容も置き換わります。",
    "Replace the current draft? Your edits will also be replaced.",
    "Tạo lại bản nháp? Nội dung bạn đã sửa cũng sẽ bị thay thế.",
    "重新生成当前初稿？手动修改的内容也会被替换。"
  ],
  "필수 항목에 내용을 입력해 주세요.": [
    "필수 항목에 내용을 입력해 주세요.",
    "必須項目を入力してください。",
    "Please complete the required fields.",
    "Vui lòng điền các mục bắt buộc.",
    "请填写必填项。"
  ],
  "초안 생성 완료": [
    "초안 생성 완료",
    "下書きを作成しました",
    "Draft generated",
    "Đã tạo bản nháp",
    "初稿已生成"
  ],
  "초안 편집 중": [
    "초안 편집 중",
    "下書きを編集中",
    "Editing draft",
    "Đang sửa bản nháp",
    "正在编辑初稿"
  ],
  "복사했습니다.": [
    "복사했습니다.",
    "コピーしました。",
    "Copied.",
    "Đã sao chép.",
    "已复制。"
  ],
  "복사 권한을 사용할 수 없습니다. 선택된 내용을 Ctrl+C 또는 ⌘C로 복사해 주세요.": [
    "복사 권한을 사용할 수 없습니다. 선택된 내용을 Ctrl+C 또는 ⌘C로 복사해 주세요.",
    "コピーできません。選択した内容をCtrl+Cまたは⌘Cでコピーしてください。",
    "Clipboard unavailable. Press Ctrl+C or ⌘C to copy the selected text.",
    "Không thể truy cập bộ nhớ tạm. Nhấn Ctrl+C hoặc ⌘C để sao chép phần đã chọn.",
    "无法使用剪贴板，请按Ctrl+C或⌘C复制选中的内容。"
  ],
  "다운로드를 요청했습니다.": [
    "다운로드를 요청했습니다.",
    "ダウンロードを開始しました。",
    "Download requested.",
    "Đã yêu cầu tải xuống.",
    "已请求下载。"
  ],
  "화면 언어를 바꿨습니다. 입력 내용과 기존 초안은 유지됩니다. 새 초안부터 선택한 언어가 적용됩니다.": [
    "화면 언어를 바꿨습니다. 입력 내용과 기존 초안은 유지됩니다. 새 초안부터 선택한 언어가 적용됩니다.",
    "表示言語を変更しました。入力と既存の下書きは保持されます。次の下書きから選択した言語が適用されます。",
    "Language changed. Your inputs and existing draft are kept. New drafts will use the selected language.",
    "Đã đổi ngôn ngữ. Thông tin và bản nháp hiện tại được giữ nguyên. Bản nháp mới sẽ dùng ngôn ngữ đã chọn.",
    "界面语言已切换。输入和现有初稿保持不变，新生成的初稿将使用所选语言。"
  ],
  "입력한 내용은 자동 번역되지 않습니다.": [
    "입력한 내용은 자동 번역되지 않습니다.",
    "入力した内容は自動翻訳されません。",
    "Your input is not automatically translated.",
    "Nội dung bạn nhập không được dịch tự động.",
    "您输入的内容不会自动翻译。"
  ]
};
Object.assign(translations, {"홈": ["홈", "ホーム", "Home", "Trang chủ", "首页"], "자세히 알아보기": ["자세히 알아보기", "もっと見る", "Explore my story", "Tìm hiểu thêm", "了解更多"], "언어를 변경했습니다.": ["언어를 변경했습니다.", "言語を変更しました。", "Language changed.", "Đã đổi ngôn ngữ.", "语言已切换。"]});
Object.assign(translations, {"보유 자격증": ["보유 자격증", "資格", "Certification", "Chứng chỉ", "资格证书"], "JLPT N1 보유": ["JLPT N1 보유", "JLPT N1 取得", "JLPT N1 certified", "Đã đạt JLPT N1", "持有 JLPT N1 证书"]});
if (typeof aboutTranslations !== 'undefined') Object.assign(translations, aboutTranslations);
if (typeof projectTranslations !== 'undefined') Object.assign(translations, projectTranslations);
Object.assign(translations, {"소셜 채널": ["소셜 채널", "ソーシャルメディア", "Social channels", "Mạng xã hội", "社交平台"], "링크 준비 중": ["링크 준비 중", "リンク準備中", "Link coming soon", "Sắp có liên kết", "链接准备中"], "소셜 계정 링크는 추후 연결할 예정입니다.": ["소셜 계정 링크는 추후 연결할 예정입니다.", "アカウントのリンクは後日追加予定です。", "Social profile links will be added later.", "Liên kết tài khoản sẽ được bổ sung sau.", "社交账号链接将在之后添加。"]});
Object.assign(translations, {"기획서 작성": ["기획서 작성", "企画書を作成", "Create a proposal", "Viết kế hoạch", "编写策划书"]});
Object.assign(translations, {"연결": ["연결", "つながり", "Connect", "Kết nối", "连接"], "문화": ["문화", "文化", "Culture", "Văn hóa", "文化"], "사람": ["사람", "人", "People", "Con người", "人"], "경험": ["경험", "経験", "Experience", "Trải nghiệm", "经历"], "서로 다른 생각을 연결해, 새로운 가능성을 만듭니다.": ["서로 다른 생각을 연결해, 새로운 가능성을 만듭니다.", "異なる考えをつなぎ、新たな可能性をつくる。", "Connecting different perspectives to create new possibilities.", "Kết nối những góc nhìn khác nhau, mở ra những khả năng mới.", "连接不同想法，创造新的可能。"], "관찰 → 연결 → 실행": ["관찰 → 연결 → 실행", "観察 → つなぐ → 実行", "Observe → Connect → Act", "Quan sát → Kết nối → Hành động", "观察 → 连接 → 实践"]});
Object.assign(translations, {'페이지 편집':['페이지 편집','ページ編集','Edit pages','Sửa trang','编辑页面']});
if (typeof editorTranslations !== 'undefined') Object.assign(translations, editorTranslations);
if (typeof galleryTranslations !== 'undefined') Object.assign(translations, galleryTranslations);
Object.assign(translations, {"문의하기": ["문의하기", "お問い合わせ", "Get in touch", "Gửi yêu cầu", "联系咨询"], "기본 메일 앱에서 문의를 작성합니다.": ["기본 메일 앱에서 문의를 작성합니다.", "既定のメールアプリでお問い合わせを作成します。", "Compose your inquiry in your default email app.", "Soạn yêu cầu trong ứng dụng email mặc định.", "在默认邮件应用中撰写咨询。"]});
Object.assign(translations, {"메뉴": ["메뉴", "メニュー", "Menu", "Menu", "菜单"], "메뉴 열기": ["메뉴 열기", "メニューを開く", "Open menu", "Mở menu", "打开菜单"], "메뉴 닫기": ["메뉴 닫기", "メニューを閉じる", "Close menu", "Đóng menu", "关闭菜单"]});
Object.assign(translations, {"KIM DOHYEON 로고": ["KIM DOHYEON 로고", "キム・ドヒョンのロゴ", "KIM DOHYEON logo", "Logo KIM DOHYEON", "KIM DOHYEON 标志"]});
const languageCodes = ['ko', 'ja', 'en', 'vi', 'zh-CN'];
let currentLanguage = 'ko';
function t(source) { return translations[source]?.[languageCodes.indexOf(currentLanguage)] ?? source; }
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script,style,#site-language,[data-mind-source]') || !translations[node.textContent.trim()]) continue;
  textNodes.push({node, original: node.textContent, key: node.textContent.trim()});
}
const attributeNodes = [];
document.querySelectorAll('[placeholder],[aria-label],[alt],[title]').forEach(node => {
  for (const attribute of ['placeholder','aria-label','alt','title']) {
    const key = node.getAttribute(attribute);
    if (translations[key]) attributeNodes.push({node,attribute,key});
  }
});
const languageSelect = document.getElementById('site-language');
function setLanguage(language, announce = false) {
  currentLanguage = languageCodes.includes(language) ? language : 'ko';
  document.documentElement.lang = currentLanguage;
  document.title = t(document.body.dataset.pageTitle) + ' | ' + t('김도현 — 마케팅 · 기획');
  document.querySelector('meta[name="description"]').content = t('마케팅과 기획 분야로 나아가는 저를 소개합니다.');
  textNodes.forEach(({node,original,key}) => { node.textContent = original.replace(key,t(key)); });
  attributeNodes.forEach(({node,attribute,key}) => node.setAttribute(attribute,t(key)));
  languageSelect.value = currentLanguage;
  document.dispatchEvent(new Event('languagechange'));
  try { localStorage.setItem('dohyun-language',currentLanguage); } catch { /* Optional persistence. */ }
  if (announce) {
    const statusNode = document.getElementById('plan-status');
    if (statusNode) statusNode.textContent = t('화면 언어를 바꿨습니다. 입력 내용과 기존 초안은 유지됩니다. 새 초안부터 선택한 언어가 적용됩니다.');
  }
}
languageSelect.addEventListener('change', () => setLanguage(languageSelect.value,true));
let savedLanguage = 'ko';
try { savedLanguage = localStorage.getItem('dohyun-language') || 'ko'; } catch { /* Korean is the default. */ }
setLanguage(savedLanguage);
