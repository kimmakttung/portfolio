'use strict';
const aboutTranslations = {
  "김도현 프로필 사진": [
    "김도현 프로필 사진",
    "キム・ドヒョンのプロフィール写真",
    "Profile photo of KIM DOHYEON",
    "Ảnh đại diện của KIM DOHYEON",
    "KIM DOHYEON的个人照片"
  ],
  "경험에서 배우고, 다음을 기획합니다.": [
    "경험에서 배우고, 다음을 기획합니다.",
    "経験から学び、次を企画する。",
    "Learning from experience. Planning what comes next.",
    "Học từ trải nghiệm, lên kế hoạch cho tương lai.",
    "从经历中学习，规划下一步。"
  ],
  "부산외국어대학교에서 일본어와 문화를 배우고, 아오모리 교환유학에서 문화교류와 기획을 경험했습니다.": [
    "부산외국어대학교에서 일본어와 문화를 배우고, 아오모리 교환유학에서 문화교류와 기획을 경험했습니다.",
    "釜山外国語大学で日本語と文化を学び、青森での交換留学で異文化交流と企画を経験しました。",
    "I study Japanese language and culture at Busan University of Foreign Studies and gained intercultural and planning experience on exchange in Aomori.",
    "Tôi học ngôn ngữ và văn hóa Nhật tại Đại học Ngoại ngữ Busan, trải nghiệm giao lưu văn hóa và lập kế hoạch khi trao đổi tại Aomori.",
    "我在釜山外国语大学学习日语与文化，并在青森交换留学期间积累了跨文化交流和策划经验。"
  ],
  "과거 · 에피소드": [
    "과거 · 에피소드",
    "過去・エピソード",
    "Past · Episodes",
    "Quá khứ · Câu chuyện",
    "过去 · 经历"
  ],
  "현재 · 진행 중": [
    "현재 · 진행 중",
    "現在・取り組み中",
    "Present · In progress",
    "Hiện tại · Đang thực hiện",
    "现在 · 进行中"
  ],
  "미래 · 목표와 키워드": [
    "미래 · 목표와 키워드",
    "未来・目標とキーワード",
    "Future · Goals & keywords",
    "Tương lai · Mục tiêu & Từ khóa",
    "未来 · 目标与关键词"
  ],
  "장점 키워드 · 원문": [
    "장점 키워드",
    "長所のキーワード・原文",
    "Strength keywords · Original",
    "Từ khóa điểm mạnh · Nguyên văn",
    "优势关键词 · 原文"
  ],
  "나의 자기분석 원문": [
    "나의 자기분석",
    "自己分析の原文",
    "My self-analysis in full",
    "Bản tự phân tích nguyên văn",
    "完整自我分析原文"
  ],
  "자기분석 이야기": [
    "자기분석 이야기",
    "自己分析の内容",
    "Self-analysis sections",
    "Các phần tự phân tích",
    "自我分析分类"
  ],
  "모두 펼치기": [
    "모두 펼치기",
    "すべて展開",
    "Expand all",
    "Mở tất cả",
    "全部展开"
  ],
  "모두 접기": [
    "모두 접기",
    "すべて閉じる",
    "Collapse all",
    "Thu gọn tất cả",
    "全部收起"
  ],
  "원문 메모 · 작성 안내 포함": [
    "메모 · 작성 안내 포함",
    "原文メモ・記入ガイドを含む",
    "Original note · includes writing prompts",
    "Ghi chú gốc · gồm hướng dẫn",
    "原始备注 · 含填写提示"
  ],
  "대학교 4학년": [
    "대학교 4학년",
    "大学4年生",
    "Fourth-year university student",
    "Sinh viên năm tư",
    "大学四年级"
  ],
  "현재의 나와 목표": [
    "현재의 나와 목표",
    "今の自分と目標",
    "Where I am and where I'm going",
    "Hiện tại và mục tiêu của tôi",
    "现在的我与目标"
  ],
  "일본 취업을 준비하는 대학 4학년입니다. 기획과 마케팅을 시작으로, 장기적으로는 나만의 브랜드와 비즈니스를 만들어가고 싶습니다.": [
    "일본 취업을 준비하는 대학 4학년입니다. 기획과 마케팅을 시작으로, 장기적으로는 나만의 브랜드와 비즈니스를 만들어가고 싶습니다.",
    "日本就職を準備している大学4年生です。企画とマーケティングを出発点に、将来は自分のブランドと事業をつくりたいです。",
    "I'm a fourth-year university student preparing for work in Japan. Starting with planning and marketing, I hope to build my own brands and business over time.",
    "Tôi là sinh viên năm tư đang chuẩn bị tìm việc tại Nhật. Từ lập kế hoạch và marketing, tôi muốn từng bước xây dựng thương hiệu và kinh doanh riêng.",
    "我是一名正在准备赴日就业的大学四年级学生，希望从策划与营销出发，逐步打造自己的品牌和事业。"
  ],
  "지금 준비하는 커리어": [
    "지금 준비하는 커리어",
    "今、準備しているキャリア",
    "The career I'm preparing for",
    "Nghề nghiệp đang chuẩn bị",
    "正在准备的职业方向"
  ],
  "일본 취업 · 기획과 마케팅": [
    "일본 취업 · 기획과 마케팅",
    "日本就職・企画とマーケティング",
    "Japan · Planning and marketing",
    "Việc làm tại Nhật · Lập kế hoạch và marketing",
    "日本就业 · 策划与营销"
  ],
  "자기분석과 지원서에 담을 경험을 정리하고 있습니다. 직접 만든 포트폴리오를 GitHub Pages에 배포하며, 기획자에게 신뢰감을 주는 디자인과 검은색 중심의 브랜딩도 탐색하고 있습니다.": [
    "자기분석과 지원서에 담을 경험을 정리하고 있습니다. 직접 만든 포트폴리오를 GitHub Pages에 배포하며, 기획자에게 신뢰감을 주는 디자인과 검은색 중심의 브랜딩도 탐색하고 있습니다.",
    "自己分析と応募書類に使う経験を整理しています。自作ポートフォリオをGitHub Pagesで公開し、企画者として信頼感のあるデザインや黒を基調としたブランディングも検討中です。",
    "I'm organizing experiences for self-analysis and applications, developing and publishing this portfolio with GitHub Pages, and exploring credible design and black-led branding.",
    "Tôi đang hệ thống hóa trải nghiệm cho hồ sơ ứng tuyển, xây dựng và triển khai portfolio qua GitHub Pages, đồng thời tìm hiểu thiết kế tạo sự tin cậy và nhận diện chủ đạo màu đen.",
    "正在整理用于自我分析和求职申请的经历，通过GitHub Pages制作并发布作品集，同时探索有信赖感的设计与黑色主调品牌形象。"
  ],
  "장기적으로 만들고 싶은 것": [
    "장기적으로 만들고 싶은 것",
    "長期的につくりたいもの",
    "What I want to build long term",
    "Điều muốn xây dựng dài hạn",
    "长期想打造的事业"
  ],
  "일본과 베트남을 잇는 브랜드": [
    "일본과 베트남을 잇는 브랜드",
    "日本とベトナムをつなぐブランド",
    "Brands connecting Japan and Vietnam",
    "Thương hiệu kết nối Nhật Bản và Việt Nam",
    "连接日本与越南的品牌"
  ],
  "탐구하는 문화콘텐츠": [
    "탐구하는 문화콘텐츠",
    "探究したい文化コンテンツ",
    "Cultural content I want to explore",
    "Nội dung văn hóa muốn tìm hiểu",
    "想探索的文化内容"
  ],
  "전통문화 · 공동체 · 문화 계승": [
    "전통문화 · 공동체 · 문화 계승",
    "伝統文化・共同体・文化継承",
    "Tradition · Community · Cultural continuity",
    "Truyền thống · Cộng đồng · Kế thừa văn hóa",
    "传统文化 · 共同体 · 文化传承"
  ],
  "일본 전통문화를 활용한 문화콘텐츠 기획에 관심이 있습니다. 특히 아오모리 네부타 축제를 통해 공동체성과 문화 계승을 탐구하는 데 학술적 관심을 두고 있습니다.": [
    "일본 전통문화를 활용한 문화콘텐츠 기획에 관심이 있습니다. 특히 아오모리 네부타 축제를 통해 공동체성과 문화 계승을 탐구하는 데 학술적 관심을 두고 있습니다.",
    "日本の伝統文化を生かす文化コンテンツ企画に関心があります。特に青森ねぶた祭を通じた共同体と文化継承を学術的に探究したいです。",
    "I'm interested in content planning using Japanese traditions, with an academic interest in community and cultural continuity through Aomori's Nebuta Festival.",
    "Tôi quan tâm đến nội dung khai thác truyền thống Nhật, đặc biệt nghiên cứu tính cộng đồng và kế thừa văn hóa qua lễ hội Nebuta ở Aomori.",
    "关注利用日本传统文化的内容策划，尤其对通过青森睡魔祭研究共同体与文化传承具有学术兴趣。"
  ],
  "학습과 성장 루틴": [
    "학습과 성장 루틴",
    "学習と成長の習慣",
    "Learning and growth routines",
    "Thói quen học tập và phát triển",
    "学习与成长习惯"
  ],
  "목표와 계획이며, 달성한 점수나 완료한 과정이 아닙니다.": [
    "목표와 계획이며, 달성한 점수나 완료한 과정이 아닙니다.",
    "以下は目標と計画であり、取得済みの点数や修了済みの講座ではありません。",
    "These are goals and plans, not achieved scores or completed courses.",
    "Đây là mục tiêu và kế hoạch, không phải điểm đã đạt hay khóa học đã hoàn thành.",
    "以下为目标和计划，并非已取得的分数或已完成课程。"
  ],
  "영어 · 2026년 말 TOEIC 500~600점 목표": [
    "영어 · 2026년 말 TOEIC 500~600점 목표",
    "英語・2026年末までにTOEIC 500〜600点",
    "English · TOEIC goal of 500–600 by the end of 2026",
    "Tiếng Anh · Mục tiêu TOEIC 500–600 cuối năm 2026",
    "英语 · 2026年底TOEIC目标500～600分"
  ],
  "하루 약 2시간 학습을 계획하고 있습니다. 듣기에 대한 익숙함을 바탕으로, 영어 회화는 짧은 문장부터 연습하려 합니다.": [
    "하루 약 2시간 학습을 계획하고 있습니다. 듣기에 대한 익숙함을 바탕으로, 영어 회화는 짧은 문장부터 연습하려 합니다.",
    "1日約2時間の学習を計画しています。聞き取りへの慣れを土台に、会話は短い文から練習したいです。",
    "I plan to study about two hours a day, building on listening familiarity while practicing spoken English through short sentences.",
    "Tôi dự định học khoảng hai giờ mỗi ngày, tận dụng sự quen thuộc với nghe và luyện nói từ những câu ngắn.",
    "计划每天学习约两小时，在听力熟悉度的基础上，从短句开始练习英语口语。"
  ],
  "베트남어 · 온라인 강의 수강 계획": [
    "베트남어 · 온라인 강의 수강 계획",
    "ベトナム語・オンライン講座の受講計画",
    "Vietnamese · Planned online study",
    "Tiếng Việt · Dự định học trực tuyến",
    "越南语 · 线上课程计划"
  ],
  "베트남어 학습을 이어가며 온라인 강의 수강을 계획하고 있습니다. 언어뿐 아니라 현지 문화에 대한 이해도 넓히려 합니다.": [
    "베트남어 학습을 이어가며 온라인 강의 수강을 계획하고 있습니다. 언어뿐 아니라 현지 문화에 대한 이해도 넓히려 합니다.",
    "ベトナム語学習を続け、オンライン講座の受講を計画しています。言語だけでなく現地文化への理解も広げたいです。",
    "I'm continuing Vietnamese study and planning an online course, with the aim of understanding local culture as well as the language.",
    "Tôi tiếp tục học tiếng Việt, dự định học khóa trực tuyến và muốn hiểu thêm văn hóa địa phương bên cạnh ngôn ngữ.",
    "继续学习越南语并计划参加线上课程，同时加深对当地文化的理解。"
  ],
  "사진 · 매주 일요일 단계별 학습": [
    "사진 · 매주 일요일 단계별 학습",
    "写真・毎週日曜日の段階的な学習",
    "Photography · Weekly Sunday practice",
    "Nhiếp ảnh · Học từng bước vào Chủ nhật",
    "摄影 · 每周日分阶段学习"
  ],
  "사진 촬영을 즐기며 구도, 빛, 색감, 카메라 설정을 단계적으로 공부하는 루틴을 운영합니다. 언어·운동·포트폴리오 작업과 함께 하나의 생활 시스템으로 관리하려 합니다.": [
    "사진 촬영을 즐기며 구도, 빛, 색감, 카메라 설정을 단계적으로 공부하는 루틴을 운영합니다. 언어·운동·포트폴리오 작업과 함께 하나의 생활 시스템으로 관리하려 합니다.",
    "構図、光、色、カメラ設定を段階的に学ぶ習慣を続けています。語学、運動、ポートフォリオ制作と一つの生活システムとして管理したいです。",
    "I enjoy photography and study composition, light, color and camera settings step by step, integrating it with language learning, exercise and portfolio work.",
    "Tôi thích chụp ảnh, học từng bước về bố cục, ánh sáng, màu sắc và cài đặt máy ảnh, kết hợp với ngoại ngữ, vận động và portfolio thành một hệ thống sinh hoạt.",
    "喜欢摄影，逐步学习构图、光线、色彩和相机设置，希望与语言、运动、作品集制作整合为一个生活系统。"
  ],
  "나의 일하는 태도": [
    "나의 일하는 태도",
    "仕事に向き合う姿勢",
    "How I want to work",
    "Thái độ làm việc của tôi",
    "我追求的工作态度"
  ],
  "차분한 태도와 실행력": [
    "차분한 태도와 실행력",
    "落ち着いた姿勢と実行力",
    "Composure and action",
    "Điềm tĩnh và hành động",
    "沉稳与执行力"
  ],
  "차분하고 따뜻하되 표현은 절제하고, 말보다 행동과 구체적인 결과로 신뢰를 쌓는 사람이 되고 싶습니다. 근거 중심의 간결한 소통과, 바로 반응하기보다 행동을 선택하는 습관을 지향합니다.": [
    "차분하고 따뜻하되 표현은 절제하고, 말보다 행동과 구체적인 결과로 신뢰를 쌓는 사람이 되고 싶습니다. 근거 중심의 간결한 소통과, 바로 반응하기보다 행동을 선택하는 습관을 지향합니다.",
    "落ち着きと温かさを持ち、言葉を抑え、行動と具体的な結果で信頼を築きたいです。根拠に基づく簡潔な対話と、反射的ではなく行動を選ぶ習慣を大切にします。",
    "I want to be composed and warm, communicate with restraint, and build trust through actions and concrete results. I value concise, evidence-based communication and choosing my response deliberately.",
    "Tôi muốn điềm tĩnh, ấm áp, diễn đạt có chừng mực và tạo niềm tin bằng hành động, kết quả. Tôi hướng đến giao tiếp ngắn gọn có căn cứ và chủ động lựa chọn cách phản ứng.",
    "希望沉稳温暖、表达克制，以行动和具体成果建立信任，重视简洁、有依据的沟通，并主动选择回应方式。"
  ],
  "배움을 실천 과제로 연결하기": [
    "배움을 실천 과제로 연결하기",
    "学びを実践につなげる",
    "Turning learning into practice",
    "Biến việc học thành thực hành",
    "将学习转化为实践"
  ],
  "좋은 글과 자료를 실천 과제로 바꾸고, 학습·운동·취업 준비를 통합해 꾸준히 실행하는 방식을 선호합니다. 아래 마인드맵에는 이런 방향의 바탕이 된 경험과 생각을 원문 그대로 담았습니다.": [
    "좋은 글과 자료를 실천 과제로 바꾸고, 학습·운동·취업 준비를 통합해 꾸준히 실행하는 방식을 선호합니다. 아래 마인드맵에는 이런 방향의 바탕이 된 경험과 생각을 원문 그대로 담았습니다.",
    "文章や資料から実践課題をつくり、学習・運動・就職準備を統合して続けることを好みます。以下のマインドマップには、その土台となった経験と思考を原文で掲載しています。",
    "I like turning useful writing and resources into practical tasks and connecting study, exercise and job preparation into a consistent system. The mind maps below preserve the experiences and thoughts behind that direction.",
    "Tôi thích chuyển tài liệu hữu ích thành nhiệm vụ thực hành và kết hợp học tập, vận động, tìm việc thành hệ thống bền vững. Các sơ đồ bên dưới giữ nguyên trải nghiệm và suy nghĩ làm nền tảng.",
    "倾向于将有价值的文章和资料转化为实践任务，把学习、运动和求职整合为持续执行的系统。下方导图原文记录了这些方向背后的经历与思考。"
  ],
  "번역 대신 원문 보기": [
    "번역 대신 원문 보기",
    "翻訳ではなく原文を表示",
    "Show original instead of translation",
    "Xem bản gốc thay cho bản dịch",
    "显示原文而非译文"
  ],
  "대학교": [
    "대학교",
    "大学",
    "University",
    "Đại học",
    "大学"
  ],
  "학부": [
    "학부",
    "学部",
    "Division",
    "Khoa",
    "学部"
  ],
  "전공": [
    "전공",
    "専攻",
    "Major",
    "Chuyên ngành",
    "专业"
  ],
  "부산외국어대학교": [
    "부산외국어대학교",
    "釜山外国語大学",
    "Busan University of Foreign Studies",
    "Đại học Ngoại ngữ Busan",
    "釜山外国语大学"
  ],
  "일본어융합학부": [
    "일본어융합학부",
    "日本語融合学部",
    "Division of Japanese Convergence Studies",
    "Khoa Nhật ngữ liên ngành",
    "日语融合学部"
  ],
  "한일문화콘텐츠전공": [
    "한일문화콘텐츠전공",
    "韓日文化コンテンツ専攻",
    "Korean–Japanese Cultural Content",
    "Nội dung văn hóa Hàn–Nhật",
    "韩日文化内容专业"
  ],
  "자체 브랜드와 브랜드 IP, 일본과 베트남을 연결하는 사업을 목표로 합니다. 노희영 고문님의 커리어를 롤모델로 삼아 브랜드 기획과 비즈니스 감각을 키우고 싶습니다.": [
    "자체 브랜드와 브랜드 IP, 일본과 베트남을 연결하는 사업을 목표로 합니다. 노희영 고문님의 커리어를 롤모델로 삼아 브랜드 기획과 비즈니스 감각을 키우고 싶습니다.",
    "独自ブランドやブランドIP、日本とベトナムをつなぐ事業を目指しています。ノ・ヒヨン顧問のキャリアをロールモデルに、ブランド企画とビジネス感覚を磨きたいです。",
    "My long-term goals include my own brands, brand IP and a business connecting Japan and Vietnam. I look to advisor Noh Hee-young's career as a role model as I develop my branding and business skills.",
    "Tôi hướng đến thương hiệu riêng, IP thương hiệu và kinh doanh kết nối Nhật–Việt. Tôi xem sự nghiệp của cố vấn Noh Hee-young là hình mẫu để phát triển năng lực hoạch định thương hiệu và tư duy kinh doanh.",
    "长期目标包括自有品牌、品牌IP及连接日本与越南的事业。我以卢熙英顾问的职业发展为榜样，培养品牌策划能力与商业思维。"
  ],
  "롤모델": [
    "롤모델",
    "ロールモデル",
    "Role model",
    "Hình mẫu",
    "榜样"
  ],
  "노희영 고문님": [
    "노희영 고문님",
    "ノ・ヒヨン顧問",
    "Advisor Noh Hee-young",
    "Cố vấn Noh Hee-young",
    "卢熙英顾问"
  ],
  "두 마인드맵의 모든 주제와 메모를 빠짐없이 수록했습니다. 선택한 언어로 전체 내용을 읽고, 원문도 그대로 확인할 수 있습니다.": [
    "두 마인드맵의 모든 주제와 메모를 빠짐없이 수록했습니다. 선택한 언어로 전체 내용을 읽고, 원문도 그대로 확인할 수 있습니다.",
    "2つのマインドマップの全トピックとメモを掲載しています。選択した言語で全文を読め、原文も確認できます。",
    "Every topic and note from both mind maps is included. Read the full content in your selected language or view the originals.",
    "Toàn bộ chủ đề và ghi chú được giữ đầy đủ. Có thể đọc toàn bộ bằng ngôn ngữ đã chọn hoặc xem nguyên văn.",
    "完整收录两份思维导图的所有主题和备注，可使用所选语言阅读全文，也可查看原文。"
  ],
  "한국어·일본어·영어·베트남어·중국어를 지원합니다. 작성 안내와 미완성 항목도 생략하지 않았습니다.": [
    "한국어·일본어·영어·베트남어·중국어를 지원합니다. 작성 안내와 미완성 항목도 생략하지 않았습니다.",
    "韓国語・日本語・英語・ベトナム語・中国語に対応。記入ガイドや未完成項目も省略していません。",
    "Available in Korean, Japanese, English, Vietnamese and Chinese. Writing prompts and unfinished entries are also preserved.",
    "Hỗ trợ tiếng Hàn, Nhật, Anh, Việt và Trung. Hướng dẫn và mục chưa hoàn thiện cũng được giữ lại.",
    "支持韩语、日语、英语、越南语和中文，也保留填写提示及未完成项目。"
  ],
  "마인드맵 번역을 불러오는 중입니다.": [
    "마인드맵 번역을 불러오는 중입니다.",
    "マインドマップの翻訳を読み込んでいます。",
    "Loading mind map translation.",
    "Đang tải bản dịch sơ đồ.",
    "正在加载思维导图译文。"
  ],
  "번역을 불러오지 못해 원문을 표시합니다. 언어를 다시 선택하면 재시도합니다.": [
    "번역을 불러오지 못해 원문을 표시합니다. 언어를 다시 선택하면 재시도합니다.",
    "翻訳を読み込めないため原文を表示しています。言語を選び直すと再試行します。",
    "Translation could not be loaded; showing the original. Select the language again to retry.",
    "Không tải được bản dịch nên hiển thị bản gốc. Chọn lại ngôn ngữ để thử lại.",
    "译文加载失败，暂时显示原文。重新选择语言可重试。"
  ]
};
