'use strict';
const aboutTranslations = {
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
    "Tôi học ngôn ngữ và văn hóa Nhật tại Đại học Ngoại ngữ Busan, đồng thời trải nghiệm giao lưu văn hóa và lập kế hoạch khi trao đổi tại Aomori.",
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
  "자기분석 이야기": [
    "자기분석 이야기",
    "自己分析のストーリー",
    "My self-reflection",
    "Câu chuyện tự phân tích",
    "自我分析历程"
  ],
  "경험을 통해 발견한 나의 강점": [
    "경험을 통해 발견한 나의 강점",
    "経験から見つけた強み",
    "Strengths discovered through experience",
    "Điểm mạnh tìm thấy qua trải nghiệm",
    "从经历中发现的优势"
  ],
  "작성 중인 자기분석을 바탕으로 경험, 현재의 실천, 앞으로의 방향을 정리했습니다.": [
    "작성 중인 자기분석을 바탕으로 경험, 현재의 실천, 앞으로의 방향을 정리했습니다.",
    "作成中の自己分析をもとに、経験、現在の取り組み、今後の方向を整理しました。",
    "A reflection on my experiences, current activities and future direction, based on my ongoing self-analysis.",
    "Từ bản tự phân tích đang hoàn thiện, tôi sắp xếp trải nghiệm, hoạt động hiện tại và định hướng tương lai.",
    "基于正在完善的自我分析，整理了经历、当前实践与未来方向。"
  ],
  "주도성": [
    "주도성",
    "主体性",
    "Initiative",
    "Tinh thần chủ động",
    "主动性"
  ],
  "부족한 문화소개 자료를 직접 제안·제작하고, 행사 운영에 필요한 일을 찾아 움직였습니다.": [
    "부족한 문화소개 자료를 직접 제안·제작하고, 행사 운영에 필요한 일을 찾아 움직였습니다.",
    "不足していた文化紹介資料を自ら提案・制作し、運営に必要なことを見つけて行動しました。",
    "I proposed and created cultural materials and took initiative when event operations needed support.",
    "Tôi chủ động đề xuất, tạo tài liệu văn hóa và tìm việc cần làm để hỗ trợ vận hành sự kiện.",
    "主动提出并制作文化介绍资料，发现并承担活动运营所需的工作。"
  ],
  "문제 해결": [
    "문제 해결",
    "課題解決",
    "Problem solving",
    "Giải quyết vấn đề",
    "解决问题"
  ],
  "교구 대여와 안전 제약을 고려해 수업 방식을 바꾸고, 현장 반응에 맞춰 활동을 조정했습니다.": [
    "교구 대여와 안전 제약을 고려해 수업 방식을 바꾸고, 현장 반응에 맞춰 활동을 조정했습니다.",
    "教材の貸出や安全面の制約を踏まえて授業を組み直し、現場の反応に合わせて調整しました。",
    "I adapted lessons around equipment and safety constraints, then adjusted activities to participants' responses.",
    "Tôi điều chỉnh bài học theo hạn chế về dụng cụ, an toàn và phản ứng của người tham gia.",
    "根据教具借用、安全限制和现场反馈调整课程与活动。"
  ],
  "꾸준한 학습": [
    "꾸준한 학습",
    "継続的な学習",
    "Consistent learning",
    "Học tập bền bỉ",
    "持续学习"
  ],
  "고등학교 때부터 일본어를 공부하고, JLPT N2·N1 취득과 교환유학으로 이어갔습니다.": [
    "고등학교 때부터 일본어를 공부하고, JLPT N2·N1 취득과 교환유학으로 이어갔습니다.",
    "高校から日本語を学び続け、JLPT N2・N1の取得と交換留学につなげました。",
    "I continued studying Japanese from high school through JLPT N2 and N1 certification and an exchange year.",
    "Tôi học tiếng Nhật từ thời phổ thông, đạt JLPT N2, N1 và tham gia trao đổi du học.",
    "从高中开始坚持学习日语，取得JLPT N2、N1并参加交换留学。"
  ],
  "다문화 협업": [
    "다문화 협업",
    "多文化での協働",
    "Intercultural collaboration",
    "Hợp tác đa văn hóa",
    "多元文化协作"
  ],
  "여러 나라의 유학생과 활동하며, 서로의 문화를 이해하고 참여를 연결하는 역할을 경험했습니다.": [
    "여러 나라의 유학생과 활동하며, 서로의 문화를 이해하고 참여를 연결하는 역할을 경험했습니다.",
    "多国籍の留学生との活動を通じて、互いの文化を理解し参加をつなぐ役割を経験しました。",
    "Working with international students taught me to understand different cultures and connect people with opportunities to participate.",
    "Qua hoạt động với du học sinh nhiều nước, tôi học cách hiểu văn hóa khác nhau và kết nối mọi người tham gia.",
    "通过与各国留学生合作，学习理解不同文化并促进参与。"
  ],
  "상황": [
    "상황",
    "状況",
    "Context",
    "Bối cảnh",
    "背景"
  ],
  "나의 행동": [
    "나의 행동",
    "自分の行動",
    "My actions",
    "Hành động của tôi",
    "我的行动"
  ],
  "결과와 배운 점": [
    "결과와 배운 점",
    "結果と学び",
    "Outcomes & learning",
    "Kết quả & Bài học",
    "结果与收获"
  ],
  "고등학교 · 일본어와 첫 교류": [
    "고등학교 · 일본어와 첫 교류",
    "高校・日本語と初めての交流",
    "High school · First exchanges",
    "Phổ thông · Giao lưu đầu tiên",
    "高中 · 初次交流"
  ],
  "일본어를 관심에서 도전으로 바꾸다": [
    "일본어를 관심에서 도전으로 바꾸다",
    "日本語への関心を挑戦につなげる",
    "Turning an interest in Japanese into action",
    "Biến sự quan tâm tiếng Nhật thành thử thách",
    "将日语兴趣转化为挑战"
  ],
  "일본어와 문화에 대한 관심으로 도쿄 오비린고교의 5일 교류와 홈스테이에 참여했습니다.": [
    "일본어와 문화에 대한 관심으로 도쿄 오비린고교의 5일 교류와 홈스테이에 참여했습니다.",
    "日本語と文化への関心から、東京の桜美林高校で5日間の交流とホームステイに参加しました。",
    "My interest in Japanese led to a five-day exchange and homestay at Obirin High School in Tokyo.",
    "Từ sự quan tâm tiếng Nhật, tôi tham gia giao lưu 5 ngày và ở cùng gia đình bản xứ tại trường Obirin ở Tokyo.",
    "出于对日语和文化的兴趣，参加了东京樱美林高中的5天交流及寄宿家庭体验。"
  ],
  "더 잘 소통하고 싶어 일본어를 공부하고, 교내외 스피치·문화 퀴즈 대회에 도전했습니다.": [
    "더 잘 소통하고 싶어 일본어를 공부하고, 교내외 스피치·문화 퀴즈 대회에 도전했습니다.",
    "よりよく交流するために日本語を学び、校内外のスピーチ大会や文化クイズ大会に挑戦しました。",
    "I studied to communicate better and entered school and regional speech and culture quiz competitions.",
    "Tôi học để giao tiếp tốt hơn và tham gia các cuộc thi hùng biện, đố vui văn hóa trong và ngoài trường.",
    "为更好地交流持续学习，并挑战校内外日语演讲和文化知识竞赛。"
  ],
  "교내 일본어 스피치 금상, 교외 스피치 3위·문화 퀴즈 4위를 경험하며 일본어를 진로로 연결했습니다.": [
    "교내 일본어 스피치 금상, 교외 스피치 3위·문화 퀴즈 4위를 경험하며 일본어를 진로로 연결했습니다.",
    "校内スピーチ大会の金賞、校外スピーチ大会3位・文化クイズ大会4位を経験し、日本語を進路につなげました。",
    "A school speech gold award, third place in an external speech contest and fourth in a culture quiz helped shape my direction.",
    "Giải vàng hùng biện trong trường, hạng ba hùng biện và hạng tư đố vui văn hóa ngoài trường giúp định hình hướng đi của tôi.",
    "获得校内演讲金奖、校外演讲第三名和文化知识竞赛第四名，逐渐明确了发展方向。"
  ],
  "대학 · 학습의 지속": [
    "대학 · 학습의 지속",
    "大学・学習の継続",
    "University · Sustained study",
    "Đại học · Duy trì học tập",
    "大学 · 持续学习"
  ],
  "일상과 병행해 JLPT N1을 취득하다": [
    "일상과 병행해 JLPT N1을 취득하다",
    "日々の生活と両立しJLPT N1を取得",
    "Earning JLPT N1 alongside daily commitments",
    "Đạt JLPT N1 song song với trách nhiệm hằng ngày",
    "兼顾日常事务，取得JLPT N1"
  ],
  "부산외국어대학교 진학 후에도 일본어 학습을 이어갔습니다.": [
    "부산외국어대학교 진학 후에도 일본어 학습을 이어갔습니다.",
    "釜山外国語大学への進学後も日本語学習を続けました。",
    "I continued studying Japanese after entering Busan University of Foreign Studies.",
    "Tôi tiếp tục học tiếng Nhật sau khi vào Đại học Ngoại ngữ Busan.",
    "进入釜山外国语大学后继续学习日语。"
  ],
  "아르바이트와 병행해 6개월간 JLPT N2를 준비했고, 사회복무 중 마지막 6개월에는 N1을 공부했습니다.": [
    "아르바이트와 병행해 6개월간 JLPT N2를 준비했고, 사회복무 중 마지막 6개월에는 N1을 공부했습니다.",
    "アルバイトと並行して6か月間N2を準備し、社会服務の最後の6か月にはN1を学習しました。",
    "I prepared for N2 for six months alongside part-time work and studied for N1 during the last six months of my public service.",
    "Tôi ôn N2 trong 6 tháng khi làm thêm và ôn N1 trong 6 tháng cuối thời gian phục vụ xã hội.",
    "兼职期间备考N2六个月，并在社会服务最后六个月学习N1。"
  ],
  "N2와 N1을 취득했습니다. 장기 목표를 일상의 학습으로 이어가는 경험이 됐습니다.": [
    "N2와 N1을 취득했습니다. 장기 목표를 일상의 학습으로 이어가는 경험이 됐습니다.",
    "N2とN1を取得。長期目標を日々の学習につなげる経験になりました。",
    "I earned both N2 and N1, learning to translate a long-term goal into consistent daily study.",
    "Tôi đạt cả N2 và N1, học cách chuyển mục tiêu dài hạn thành việc học đều đặn.",
    "取得N2和N1，学会将长期目标落实为日常学习。"
  ],
  "대학 · 국제교류": [
    "대학 · 국제교류",
    "大学・国際交流",
    "University · International exchange",
    "Đại học · Giao lưu quốc tế",
    "大学 · 国际交流"
  ],
  "온라인 교류의 아쉬움을 학습으로 바꾸다": [
    "온라인 교류의 아쉬움을 학습으로 바꾸다",
    "オンライン交流での課題を学びに変える",
    "Learning from challenging online exchanges",
    "Học từ những khó khăn khi giao lưu trực tuyến",
    "从线上交流的不足中学习"
  ],
  "2021년 2학기 환경정화 워크숍과 후쿠오카여자대학교 온라인 교류에 참여했습니다.": [
    "2021년 2학기 환경정화 워크숍과 후쿠오카여자대학교 온라인 교류에 참여했습니다.",
    "2021年度後期の環境浄化ワークショップと福岡女子大学とのオンライン交流に参加しました。",
    "I joined an environmental workshop in the second semester of 2021 and an online exchange with Fukuoka Women's University.",
    "Tôi tham gia hội thảo môi trường học kỳ hai năm 2021 và giao lưu trực tuyến với Đại học Nữ sinh Fukuoka.",
    "参加了2021年第二学期环境工作坊及与福冈女子大学的线上交流。"
  ],
  "환경 문제를 논의하며 지식의 부족을 돌아봤고, 대화가 어려웠던 경험 뒤에는 언어교환 앱으로 표현을 연습했습니다.": [
    "환경 문제를 논의하며 지식의 부족을 돌아봤고, 대화가 어려웠던 경험 뒤에는 언어교환 앱으로 표현을 연습했습니다.",
    "環境問題の議論で知識不足を振り返り、会話での課題を受けて言語交換アプリで表現を練習しました。",
    "Discussions exposed gaps in my knowledge; after struggling with conversation, I practiced expressions through a language exchange app.",
    "Thảo luận giúp tôi nhận ra kiến thức còn thiếu; sau khó khăn giao tiếp, tôi luyện cách diễn đạt qua ứng dụng trao đổi ngôn ngữ.",
    "讨论让我反思知识不足，并在交流受挫后通过语言交换应用练习表达。"
  ],
  "나이나 배경에 관계없이 배우는 자세와, 소통을 개선하기 위해 계속 참여하는 태도를 갖게 됐습니다.": [
    "나이나 배경에 관계없이 배우는 자세와, 소통을 개선하기 위해 계속 참여하는 태도를 갖게 됐습니다.",
    "年齢や背景に関係なく学ぶ姿勢と、交流に参加し続けて改善する姿勢を得ました。",
    "I learned to listen beyond age and background and keep participating to improve communication.",
    "Tôi học cách lắng nghe không phân biệt tuổi tác, xuất thân và tiếp tục tham gia để cải thiện giao tiếp.",
    "学会不受年龄和背景限制地向他人学习，并持续参与以改善沟通。"
  ],
  "대학 · 발표 기획": [
    "대학 · 발표 기획",
    "大学・プレゼン企画",
    "University · Presentation design",
    "Đại học · Thiết kế thuyết trình",
    "大学 · 演讲策划"
  ],
  "AI 언어학습 발표에 참여형 퀴즈를 더하다": [
    "AI 언어학습 발표에 참여형 퀴즈를 더하다",
    "AI言語学習の発表に参加型クイズを導入",
    "Adding participation to an AI language-learning presentation",
    "Thêm tương tác vào bài thuyết trình học ngôn ngữ bằng AI",
    "为AI语言学习演讲加入互动问答"
  ],
  "규슈산업대학교와의 교류회에서 ChatGPT를 활용한 라틴어 학습법을 발표했습니다.": [
    "규슈산업대학교와의 교류회에서 ChatGPT를 활용한 라틴어 학습법을 발표했습니다.",
    "九州産業大学との交流会で、ChatGPTを使ったラテン語学習法を発表しました。",
    "At an exchange with Kyushu Sangyo University, I presented a method for learning Latin with ChatGPT.",
    "Trong giao lưu với Đại học Kyushu Sangyo, tôi trình bày cách học tiếng Latin bằng ChatGPT.",
    "在与九州产业大学的交流会上，介绍了用ChatGPT学习拉丁语的方法。"
  ],
  "청중의 참여를 위해 작은 선물이 있는 퀴즈를 구성하고, 대본 없이 자연스럽게 진행하도록 반복 연습했습니다.": [
    "청중의 참여를 위해 작은 선물이 있는 퀴즈를 구성하고, 대본 없이 자연스럽게 진행하도록 반복 연습했습니다.",
    "参加を促すため景品付きクイズを組み込み、台本なしで自然に進められるよう繰り返し練習しました。",
    "I built in a quiz with small prizes and rehearsed to deliver it naturally without relying on a script.",
    "Tôi thêm câu đố có quà nhỏ và luyện tập để dẫn dắt tự nhiên mà không phụ thuộc kịch bản.",
    "设计附有小礼物的问答环节，反复练习脱稿自然表达。"
  ],
  "퀴즈에서 적극적인 참여를 이끌었습니다. 다음 과제로는 참여 분위기를 발표 전체에 이어가는 방법을 남겼습니다.": [
    "퀴즈에서 적극적인 참여를 이끌었습니다. 다음 과제로는 참여 분위기를 발표 전체에 이어가는 방법을 남겼습니다.",
    "クイズでは積極的な参加を得ました。次の課題は、その雰囲気を発表全体で持続させることです。",
    "The quiz encouraged participation. Sustaining that engagement throughout the presentation became my next learning goal.",
    "Câu đố khuyến khích sự tham gia; duy trì tương tác suốt bài thuyết trình trở thành bài học tiếp theo.",
    "问答带动了积极参与，如何在整场演讲中保持互动成为下一步课题。"
  ],
  "대학 · 통역 봉사": [
    "대학 · 통역 봉사",
    "大学・通訳ボランティア",
    "University · Volunteer interpreting",
    "Đại học · Tình nguyện phiên dịch",
    "大学 · 志愿口译"
  ],
  "조선통신사 축제에서 현장 운영을 돕다": [
    "조선통신사 축제에서 현장 운영을 돕다",
    "朝鮮通信使祭りの現場運営を支援",
    "Supporting operations at the Joseon Tongsinsa Festival",
    "Hỗ trợ vận hành Lễ hội Sứ đoàn Joseon",
    "协助朝鲜通信使节庆现场运营"
  ],
  "일본어 통역 자원봉사에 지원해 예상 질문을 준비하고 면접을 거쳐 선발됐습니다.": [
    "일본어 통역 자원봉사에 지원해 예상 질문을 준비하고 면접을 거쳐 선발됐습니다.",
    "日本語通訳ボランティアに応募し、想定質問を準備して面接を経て選ばれました。",
    "I prepared for the interview and was selected as a volunteer Japanese interpreter.",
    "Tôi chuẩn bị câu hỏi phỏng vấn và được chọn làm tình nguyện viên phiên dịch tiếng Nhật.",
    "准备面试问题并通过选拔，成为日语口译志愿者。"
  ],
  "현장 안내와 좌석 배치를 도왔고, 행렬과 일본 공연팀의 동선이 겹칠 때 스태프와의 통역을 맡았습니다.": [
    "현장 안내와 좌석 배치를 도왔고, 행렬과 일본 공연팀의 동선이 겹칠 때 스태프와의 통역을 맡았습니다.",
    "案内や座席配置を手伝い、行列と日本の演奏チームの動線が重なった際にはスタッフとの通訳を担当しました。",
    "I helped with visitor guidance and seating, and interpreted between staff and Japanese performers when routes overlapped.",
    "Tôi hướng dẫn khách, hỗ trợ bố trí ghế và phiên dịch giữa nhân viên với đoàn biểu diễn Nhật khi lộ trình giao nhau.",
    "协助引导和座位安排，并在巡游队伍与日本演出团队路线重叠时为工作人员口译。"
  ],
  "정해진 역할에만 머무르지 않고, 현장 상황을 보고 필요한 도움을 찾는 태도를 배웠습니다.": [
    "정해진 역할에만 머무르지 않고, 현장 상황을 보고 필요한 도움을 찾는 태도를 배웠습니다.",
    "決められた役割にとどまらず、現場を見て必要な支援を見つける姿勢を学びました。",
    "I learned to look beyond assigned tasks and respond to what the situation needed.",
    "Tôi học cách quan sát thực tế và hỗ trợ ngoài phạm vi công việc được giao.",
    "学会超越既定职责，根据现场情况寻找需要提供的帮助。"
  ],
  "교환유학 · 문화교류 기획": [
    "교환유학 · 문화교류 기획",
    "交換留学・異文化交流企画",
    "Exchange · Cultural planning",
    "Trao đổi · Kế hoạch giao lưu văn hóa",
    "交换留学 · 文化交流策划"
  ],
  "아오모리에서 한국을 소개하는 경험을 설계하다": [
    "아오모리에서 한국을 소개하는 경험을 설계하다",
    "青森で韓国を紹介する体験を設計",
    "Designing a Korean cultural experience in Aomori",
    "Thiết kế trải nghiệm văn hóa Hàn tại Aomori",
    "在青森设计韩国文化体验"
  ],
  "아오모리 국제교류 행사에서 국제교류 담당 부서와 한국 소개 부스를 준비했습니다.": [
    "아오모리 국제교류 행사에서 국제교류 담당 부서와 한국 소개 부스를 준비했습니다.",
    "青森の国際交流イベントで、国際交流担当部署と韓国紹介ブースを準備しました。",
    "I worked with the international office to prepare a Korean culture booth for an exchange event in Aomori.",
    "Tôi cùng bộ phận giao lưu quốc tế chuẩn bị gian hàng văn hóa Hàn tại sự kiện ở Aomori.",
    "与国际交流部门合作，为青森的国际交流活动筹备韩国介绍展位。"
  ],
  "기존 자료를 보완할 서울·부산·제주 포스터와 공기놀이 체험을 제안하고 제작·준비했습니다.": [
    "기존 자료를 보완할 서울·부산·제주 포스터와 공기놀이 체험을 제안하고 제작·준비했습니다.",
    "既存資料を補うソウル・釜山・済州のポスターとコンギ遊び体験を提案し、制作・準備しました。",
    "I proposed and prepared posters on Seoul, Busan and Jeju, alongside a hands-on gonggi activity to improve the existing materials.",
    "Tôi đề xuất và chuẩn bị áp phích Seoul, Busan, Jeju cùng trải nghiệm chơi gonggi để bổ sung tài liệu sẵn có.",
    "提出并制作首尔、釜山、济州海报，准备空抓石子体验，补充原有资料。"
  ],
  "자료는 좋은 평가를 받았습니다. 캐릭터 저작권으로 공식 책자화는 진행하지 못해 비공식 교육자료 활용을 제안했습니다.": [
    "자료는 좋은 평가를 받았습니다. 캐릭터 저작권으로 공식 책자화는 진행하지 못해 비공식 교육자료 활용을 제안했습니다.",
    "資料は好評でした。キャラクターの著作権により公式冊子にはできず、非公式の教育資料としての活用を提案しました。",
    "The materials received positive feedback. Character copyright prevented an official booklet, so I proposed using them as informal educational resources.",
    "Tài liệu được đánh giá tốt. Do bản quyền nhân vật không thể xuất bản chính thức, tôi đề xuất dùng làm tài liệu giáo dục không chính thức.",
    "资料获得好评，但因角色版权未能制成正式册子，因此提出作为非正式教学资料使用。"
  ],
  "교환유학 · 어린이 교육": [
    "교환유학 · 어린이 교육",
    "交換留学・子ども向け教育",
    "Exchange · Children's education",
    "Trao đổi · Giáo dục trẻ em",
    "交换留学 · 儿童教育"
  ],
  "제약을 바꿔 전통놀이 수업을 완성하다": [
    "제약을 바꿔 전통놀이 수업을 완성하다",
    "制約に合わせて伝統遊びの授業を工夫",
    "Adapting traditional-play lessons to real constraints",
    "Điều chỉnh tiết học trò chơi truyền thống theo điều kiện thực tế",
    "根据实际限制调整传统游戏课程"
  ],
  "보육·교육 활동에서 한국 전통문화를 소개했습니다. 악기 대여와 어린이 안전 문제로 처음 계획을 조정해야 했습니다.": [
    "보육·교육 활동에서 한국 전통문화를 소개했습니다. 악기 대여와 어린이 안전 문제로 처음 계획을 조정해야 했습니다.",
    "保育・教育活動で韓国文化を紹介しました。楽器の貸出や子どもの安全上の課題で当初の計画を調整しました。",
    "I introduced Korean culture in education activities, adapting the original plan around instrument access and children's safety.",
    "Tôi giới thiệu văn hóa Hàn trong hoạt động giáo dục, điều chỉnh kế hoạch vì việc mượn nhạc cụ và an toàn của trẻ.",
    "在保育教育活动中介绍韩国文化，因乐器借用和儿童安全问题调整最初方案。"
  ],
  "작은 모자를 만들어 나누고 직접 춤을 시연했습니다. 반응에 맞춰 게임 규칙을 더하고, 다른 수업에서는 윷놀이와 공기놀이를 소개했습니다.": [
    "작은 모자를 만들어 나누고 직접 춤을 시연했습니다. 반응에 맞춰 게임 규칙을 더하고, 다른 수업에서는 윷놀이와 공기놀이를 소개했습니다.",
    "小さな帽子を作って配り、自分が踊りを実演。反応に合わせてゲームのルールを加え、別の授業ではユンノリやコンギも紹介しました。",
    "I made small hats, demonstrated the dance myself and added game rules in response to the children. Other sessions introduced yutnori and gonggi.",
    "Tôi làm mũ nhỏ, tự biểu diễn điệu múa và thêm luật chơi theo phản ứng của trẻ. Các buổi khác giới thiệu yutnori và gonggi.",
    "制作小帽子并亲自示范舞蹈，根据孩子反应加入游戏规则，其他课程还介绍了掷柶和空抓石子。"
  ],
  "수업을 마쳤고 관련 놀이 소개는 다음 학기에도 이어졌습니다. 대상의 눈높이와 안전에 맞춰 기획하는 법을 배웠습니다.": [
    "수업을 마쳤고 관련 놀이 소개는 다음 학기에도 이어졌습니다. 대상의 눈높이와 안전에 맞춰 기획하는 법을 배웠습니다.",
    "授業を実施し、遊びの紹介は次の学期にも続きました。対象の理解度と安全に合わせた企画を学びました。",
    "The lessons were completed and play introductions continued the following semester. I learned to design for audience needs and safety.",
    "Các tiết học được hoàn thành và hoạt động tiếp tục ở học kỳ sau. Tôi học cách thiết kế phù hợp khả năng và an toàn của người tham gia.",
    "顺利完成课程，游戏介绍延续至下一学期，学会兼顾对象理解水平与安全进行策划。"
  ],
  "교환유학 · 사람을 연결하다": [
    "교환유학 · 사람을 연결하다",
    "交換留学・人をつなぐ",
    "Exchange · Connecting people",
    "Trao đổi · Kết nối mọi người",
    "交换留学 · 连接人们"
  ],
  "다국적 유학생의 참여를 이끌다": [
    "다국적 유학생의 참여를 이끌다",
    "多国籍の留学生の参加をつなぐ",
    "Bringing international students into activities",
    "Kết nối du học sinh tham gia hoạt động",
    "促进多国留学生参与活动"
  ],
  "보육 세미나에서 유학생이 필요하다는 이야기를 듣고, 문화적 다양성을 더할 참여자를 찾았습니다.": [
    "보육 세미나에서 유학생이 필요하다는 이야기를 듣고, 문화적 다양성을 더할 참여자를 찾았습니다.",
    "保育ゼミで留学生が必要だと聞き、文化的な多様性を広げる参加者を探しました。",
    "When a childcare seminar needed international students, I looked for participants who could bring cultural diversity.",
    "Khi seminar giáo dục mầm non cần du học sinh, tôi tìm người tham gia để tăng sự đa dạng văn hóa.",
    "得知保育研讨课需要留学生参与后，主动寻找能增加文化多样性的参与者。"
  ],
  "베트남 8명·태국 1명·말레이시아 1명의 참여를 연결했습니다. 다른 활동에서도 일본어 소통이 어려운 유학생을 대신해 먼저 말을 걸었습니다.": [
    "베트남 8명·태국 1명·말레이시아 1명의 참여를 연결했습니다. 다른 활동에서도 일본어 소통이 어려운 유학생을 대신해 먼저 말을 걸었습니다.",
    "ベトナム8名・タイ1名・マレーシア1名の参加をつなぎました。他の活動でも日本語で話しかけにくい留学生に代わって声をかけました。",
    "I connected eight Vietnamese, one Thai and one Malaysian student with the seminar, and also helped peers initiate conversations in Japanese in other activities.",
    "Tôi kết nối 8 sinh viên Việt Nam, 1 Thái Lan, 1 Malaysia với seminar và hỗ trợ bạn bè mở lời bằng tiếng Nhật trong hoạt động khác.",
    "促成8名越南、1名泰国和1名马来西亚学生参与，也在其他活动中帮助同学用日语开启交流。"
  ],
  "언어 능력을 개인의 성과에만 쓰지 않고, 다른 사람의 참여를 돕는 데 활용하는 경험이 됐습니다.": [
    "언어 능력을 개인의 성과에만 쓰지 않고, 다른 사람의 참여를 돕는 데 활용하는 경험이 됐습니다.",
    "語学力を個人の成果だけでなく、他の人の参加を支えるために使う経験になりました。",
    "I learned to use language skills to support others' participation, not only my own progress.",
    "Tôi học cách dùng ngôn ngữ để hỗ trợ người khác tham gia, không chỉ cho thành tích cá nhân.",
    "体会到语言能力不仅用于个人成长，也可以支持他人参与。"
  ],
  "교환유학 · IT 서비스 검증": [
    "교환유학 · IT 서비스 검증",
    "交換留学・ITサービス検証",
    "Exchange · IT service validation",
    "Trao đổi · Kiểm chứng dịch vụ IT",
    "交换留学 · IT服务验证"
  ],
  "다국어 의료 지원 앱을 사용자 관점에서 검증하다": [
    "다국어 의료 지원 앱을 사용자 관점에서 검증하다",
    "利用者の視点で多言語医療支援アプリを検証",
    "Testing a multilingual medical support app as a user",
    "Kiểm thử ứng dụng hỗ trợ y tế đa ngôn ngữ từ góc nhìn người dùng",
    "从用户角度验证多语言医疗支持应用"
  ],
  "아오모리현립보건대학교의 다국어 의료 지원 앱 유효성 검증 연구에 협력했습니다.": [
    "아오모리현립보건대학교의 다국어 의료 지원 앱 유효성 검증 연구에 협력했습니다.",
    "青森県立保健大学の多言語医療支援アプリの有効性検証研究に協力しました。",
    "I participated in a study evaluating a multilingual medical support app at Aomori University of Health and Welfare.",
    "Tôi hợp tác trong nghiên cứu đánh giá ứng dụng hỗ trợ y tế đa ngôn ngữ tại Đại học Y tế và Phúc lợi Aomori.",
    "参与青森县立保健大学的多语言医疗支持应用有效性验证研究。"
  ],
  "일본어를 모르는 외국인 사용자를 가정해 앱을 사용하고, 어색한 번역과 오류에 대한 피드백을 전달했습니다.": [
    "일본어를 모르는 외국인 사용자를 가정해 앱을 사용하고, 어색한 번역과 오류에 대한 피드백을 전달했습니다.",
    "日本語がわからない外国人利用者を想定してアプリを使い、不自然な翻訳や不具合をフィードバックしました。",
    "I used the app as a simulated non-Japanese-speaking user and provided feedback on awkward translations and bugs.",
    "Tôi giả định là người dùng không biết tiếng Nhật và phản hồi về bản dịch thiếu tự nhiên, lỗi ứng dụng.",
    "模拟不懂日语的外国用户使用应用，反馈不自然的翻译和错误。"
  ],
  "서비스를 사용자 입장에서 관찰하고 개선점을 전달하는 경험을 했습니다. 앱 개발에 관심을 넓힌 계기가 됐습니다.": [
    "서비스를 사용자 입장에서 관찰하고 개선점을 전달하는 경험을 했습니다. 앱 개발에 관심을 넓힌 계기가 됐습니다.",
    "利用者の立場で改善点を伝える経験をし、アプリ開発への関心を広げるきっかけになりました。",
    "The experience taught me to communicate improvements from a user's perspective and sparked an interest in app development.",
    "Trải nghiệm giúp tôi đề xuất cải thiện từ góc nhìn người dùng và mở rộng sự quan tâm đến phát triển ứng dụng.",
    "积累了从用户视角提出改进的经验，并对应用开发产生兴趣。"
  ],
  "대학 · 도전과 회고": [
    "대학 · 도전과 회고",
    "大学・挑戦と振り返り",
    "University · Challenge and reflection",
    "Đại học · Thử thách và nhìn lại",
    "大学 · 挑战与复盘"
  ],
  "기획경진대회에 도전하다": [
    "기획경진대회에 도전하다",
    "企画コンテストに挑戦",
    "Entering a planning competition",
    "Tham gia cuộc thi lập kế hoạch",
    "挑战策划竞赛"
  ],
  "마케팅을 이해하는 기획자가 되고 싶어 교내 기획경진대회에 참여했습니다.": [
    "마케팅을 이해하는 기획자가 되고 싶어 교내 기획경진대회에 참여했습니다.",
    "マーケティングを理解する企画者を目指し、学内の企画コンテストに参加しました。",
    "I entered a university planning competition to move toward becoming a planner who understands marketing.",
    "Tôi tham gia cuộc thi lập kế hoạch trong trường để trở thành người làm kế hoạch hiểu marketing.",
    "为成为懂营销的策划者，参加了校内策划竞赛。"
  ],
  "원하는 결과로 이어지지는 않았지만 도전 자체를 경험으로 받아들였습니다. 세부 기획 내용과 회고는 정리 중입니다.": [
    "원하는 결과로 이어지지는 않았지만 도전 자체를 경험으로 받아들였습니다. 세부 기획 내용과 회고는 정리 중입니다.",
    "望む結果にはつながりませんでしたが、挑戦を経験として受け止めました。企画の詳細と振り返りは整理中です。",
    "It did not lead to the result I wanted, but I value the experience. Project details and a fuller reflection are still being organized.",
    "Kết quả chưa như mong muốn nhưng tôi trân trọng trải nghiệm. Nội dung kế hoạch và phần nhìn lại đang được hoàn thiện.",
    "虽然未获得理想结果，但将挑战视为经验。具体方案和复盘仍在整理中。"
  ],
  "실패를 피하기보다, 다음 도전을 위한 학습으로 바꾸는 태도를 연습하고 있습니다.": [
    "실패를 피하기보다, 다음 도전을 위한 학습으로 바꾸는 태도를 연습하고 있습니다.",
    "失敗を避けるより、次の挑戦の学びに変える姿勢を育てています。",
    "I'm practicing turning setbacks into learning for the next challenge.",
    "Tôi đang tập biến thất bại thành bài học cho thử thách tiếp theo.",
    "正在练习将挫折转化为下一次挑战的学习。"
  ],
  "지금 쌓아가는 것들": [
    "지금 쌓아가는 것들",
    "今、積み重ねていること",
    "What I'm working on now",
    "Những điều đang xây dựng",
    "当前的积累"
  ],
  "언어 학습": [
    "언어 학습",
    "語学学習",
    "Language learning",
    "Học ngoại ngữ",
    "语言学习"
  ],
  "영어·베트남어 학습과 일본어 활용": [
    "영어·베트남어 학습과 일본어 활용",
    "英語・ベトナム語の学習と日本語の活用",
    "Learning English and Vietnamese; using Japanese",
    "Học tiếng Anh, tiếng Việt và vận dụng tiếng Nhật",
    "学习英语、越南语并运用日语"
  ],
  "JLPT N1을 바탕으로 일본어를 활용하며, 영어와 베트남어를 공부하고 있습니다. 여러 문화의 관점을 이해하는 폭을 넓히고 싶습니다.": [
    "JLPT N1을 바탕으로 일본어를 활용하며, 영어와 베트남어를 공부하고 있습니다. 여러 문화의 관점을 이해하는 폭을 넓히고 싶습니다.",
    "JLPT N1を基盤に日本語を活用し、英語とベトナム語を学習中です。さまざまな文化の視点を理解する幅を広げたいです。",
    "Building on JLPT N1, I use Japanese and study English and Vietnamese to broaden my understanding of different cultural perspectives.",
    "Dựa trên JLPT N1, tôi vận dụng tiếng Nhật và học tiếng Anh, tiếng Việt để hiểu thêm nhiều góc nhìn văn hóa.",
    "以JLPT N1为基础运用日语，同时学习英语和越南语，拓宽跨文化视角。"
  ],
  "소통 연습": [
    "소통 연습",
    "コミュニケーション練習",
    "Communication practice",
    "Luyện giao tiếp",
    "沟通练习"
  ],
  "상대를 생각하는 표현 연습": [
    "상대를 생각하는 표현 연습",
    "相手を考えた表現の練習",
    "Practicing considerate communication",
    "Luyện cách diễn đạt quan tâm đến người nghe",
    "练习顾及对方的表达"
  ],
  "대화와 채팅, AI를 활용해 직설적인 표현을 부드럽게 바꾸는 연습을 합니다. 상대의 입장에서 질문하고 듣는 방법을 고민합니다.": [
    "대화와 채팅, AI를 활용해 직설적인 표현을 부드럽게 바꾸는 연습을 합니다. 상대의 입장에서 질문하고 듣는 방법을 고민합니다.",
    "会話やチャット、AIで率直すぎる表現を和らげる練習をしています。相手の立場で質問し、聞く方法を考えています。",
    "I practice softening overly direct expressions through conversation, chat and AI, thinking about how to ask and listen from the other person's perspective.",
    "Tôi luyện cách nói mềm hơn qua trò chuyện, tin nhắn và AI, suy nghĩ cách hỏi và lắng nghe từ góc nhìn người đối diện.",
    "通过对话、聊天和AI练习柔和表达，思考如何站在对方角度提问与倾听。"
  ],
  "콘텐츠 실험": [
    "콘텐츠 실험",
    "コンテンツの試行",
    "Content experiments",
    "Thử nghiệm nội dung",
    "内容尝试"
  ],
  "사진·영상과 인스타그램 기록": [
    "사진·영상과 인스타그램 기록",
    "写真・動画とInstagramの記録",
    "Photography, video and Instagram",
    "Ảnh, video và ghi chép trên Instagram",
    "摄影、视频与Instagram记录"
  ],
  "사진을 찍고 짧은 영상을 만들어 인스타그램에 올려보고 있습니다. 전문적인 영상 학습은 앞으로 더 해보고 싶은 계획입니다.": [
    "사진을 찍고 짧은 영상을 만들어 인스타그램에 올려보고 있습니다. 전문적인 영상 학습은 앞으로 더 해보고 싶은 계획입니다.",
    "写真や短い動画を制作し、Instagramへの投稿を試しています。動画を本格的に学ぶのは今後の計画です。",
    "I take photos, make short videos and try sharing them on Instagram. More structured video study is a future plan.",
    "Tôi chụp ảnh, làm video ngắn và thử đăng Instagram. Học video bài bản hơn là kế hoạch trong tương lai.",
    "尝试拍照、制作短视频并发布到Instagram，系统学习视频制作是未来计划。"
  ],
  "기획 학습": [
    "기획 학습",
    "企画の学習",
    "Studying planning",
    "Học lập kế hoạch",
    "策划学习"
  ],
  "문화콘텐츠와 기획 지식 정리": [
    "문화콘텐츠와 기획 지식 정리",
    "文化コンテンツと企画知識の整理",
    "Learning cultural content and planning",
    "Hệ thống hóa nội dung văn hóa và kiến thức lập kế hoạch",
    "整理文化内容与策划知识"
  ],
  "한일 문화콘텐츠 관련 수업에서 기획에 필요한 개념과 용어를 익히고 있습니다. 웹페이지 제작과 데이터 활용 등 배운 내용을 기획에 연결하려 합니다.": [
    "한일 문화콘텐츠 관련 수업에서 기획에 필요한 개념과 용어를 익히고 있습니다. 웹페이지 제작과 데이터 활용 등 배운 내용을 기획에 연결하려 합니다.",
    "日韓の文化コンテンツの授業で企画に必要な概念や用語を学んでいます。Web制作やデータ活用の学びも企画につなげたいです。",
    "I study planning concepts through Korean-Japanese cultural content courses and aim to connect web and data skills with planning.",
    "Tôi học khái niệm lập kế hoạch qua môn nội dung văn hóa Hàn–Nhật và muốn kết nối kiến thức web, dữ liệu với việc lập kế hoạch.",
    "通过韩日文化内容课程学习策划概念，并希望将网页制作、数据运用等所学与策划结合。"
  ],
  "자기 성장": [
    "자기 성장",
    "自己成長",
    "Personal growth",
    "Phát triển bản thân",
    "自我成长"
  ],
  "독서와 꾸준한 운동": [
    "독서와 꾸준한 운동",
    "読書と継続的な運動",
    "Reading and regular exercise",
    "Đọc sách và tập luyện đều đặn",
    "阅读与规律运动"
  ],
  "심리와 감정 조절, 회복탄력성 관련 책을 읽고 있습니다. 헬스장과 달리기를 통해 일상의 꾸준함도 이어가고 있습니다.": [
    "심리와 감정 조절, 회복탄력성 관련 책을 읽고 있습니다. 헬스장과 달리기를 통해 일상의 꾸준함도 이어가고 있습니다.",
    "心理や感情のコントロール、レジリエンスの本を読んでいます。ジムとランニングで日々の継続も大切にしています。",
    "I read about psychology, emotional regulation and resilience, and maintain consistency through gym sessions and running.",
    "Tôi đọc về tâm lý, điều chỉnh cảm xúc, khả năng phục hồi và duy trì tập gym, chạy bộ đều đặn.",
    "阅读心理、情绪调节和韧性相关书籍，通过健身和跑步保持日常坚持。"
  ],
  "앞으로 향하고 싶은 방향": [
    "앞으로 향하고 싶은 방향",
    "これから目指したい方向",
    "Where I want to go next",
    "Hướng đi trong tương lai",
    "未来想走的方向"
  ],
  "아래 내용은 달성한 성과가 아닌, 자기분석에 적은 목표와 관심 방향입니다.": [
    "아래 내용은 달성한 성과가 아닌, 자기분석에 적은 목표와 관심 방향입니다.",
    "以下は達成済みの実績ではなく、自己分析に記した目標と関心の方向です。",
    "These are goals and interests from my self-analysis, not completed achievements.",
    "Đây là mục tiêu và định hướng trong bản tự phân tích, không phải thành tích đã đạt được.",
    "以下是自我分析中的目标和兴趣方向，并非已经取得的成果。"
  ],
  "진로 목표": [
    "진로 목표",
    "キャリアの目標",
    "Career goal",
    "Mục tiêu nghề nghiệp",
    "职业目标"
  ],
  "일본에서 마케팅·기획으로 일하기": [
    "일본에서 마케팅·기획으로 일하기",
    "日本でマーケティング・企画に携わる",
    "Working in marketing and planning in Japan",
    "Làm marketing và lập kế hoạch tại Nhật",
    "在日本从事营销与策划"
  ],
  "서비스·마케팅·상품 기획에 관심이 있습니다. 일본에서 쌓은 문화 이해와 인적 교류 경험을 업무에 연결하고 싶습니다.": [
    "서비스·마케팅·상품 기획에 관심이 있습니다. 일본에서 쌓은 문화 이해와 인적 교류 경험을 업무에 연결하고 싶습니다.",
    "サービス・マーケティング・商品企画に関心があります。日本での文化理解と交流経験を仕事につなげたいです。",
    "I'm interested in service, marketing and product planning, and want to bring my cultural understanding and exchange experience into work in Japan.",
    "Tôi quan tâm đến kế hoạch dịch vụ, marketing, sản phẩm và muốn vận dụng hiểu biết văn hóa, trải nghiệm giao lưu vào công việc ở Nhật.",
    "关注服务、营销和商品策划，希望将对日本文化的理解与交流经验运用于工作。"
  ],
  "성장 키워드": [
    "성장 키워드",
    "成長のキーワード",
    "Growth keywords",
    "Từ khóa phát triển",
    "成长关键词"
  ],
  "기획 × IT × 다양한 관점": [
    "기획 × IT × 다양한 관점",
    "企画 × IT × 多角的な視点",
    "Planning × IT × Multiple perspectives",
    "Lập kế hoạch × IT × Góc nhìn đa chiều",
    "策划 × IT × 多元视角"
  ],
  "마케팅과 기획에 도움이 되는 IT 기술을 배우고, 하나의 대상을 여러 관점에서 바라보는 능력을 기르고 싶습니다. IT 분야는 함께 탐색하는 관심 영역입니다.": [
    "마케팅과 기획에 도움이 되는 IT 기술을 배우고, 하나의 대상을 여러 관점에서 바라보는 능력을 기르고 싶습니다. IT 분야는 함께 탐색하는 관심 영역입니다.",
    "企画に役立つIT技術と、多角的に考える力を育てたいです。IT分野も関心領域として探索しています。",
    "I want to learn IT skills that support marketing and planning and develop the ability to see issues from multiple angles. IT is also an area I'm exploring.",
    "Tôi muốn học kỹ năng IT hỗ trợ marketing, lập kế hoạch và tư duy đa chiều. IT cũng là lĩnh vực tôi đang tìm hiểu.",
    "希望学习支持营销策划的IT技能并培养多角度思考能力，IT也是正在探索的领域。"
  ],
  "장기적인 꿈": [
    "장기적인 꿈",
    "長期的な夢",
    "Long-term ambition",
    "Ước mơ dài hạn",
    "长期梦想"
  ],
  "일본·베트남에서 나만의 브랜드와 사업": [
    "일본·베트남에서 나만의 브랜드와 사업",
    "日本・ベトナムで自分のブランドと事業をつくる",
    "Building my own brand and business in Japan or Vietnam",
    "Xây dựng thương hiệu và kinh doanh tại Nhật hoặc Việt Nam",
    "在日本或越南打造自己的品牌与事业"
  ],
  "B2C·D2C와 브랜드 IP에 관심이 있습니다. 일본과 베트남의 문화·시장에 대한 이해를 쌓으며 미래의 사업 가능성을 탐색하고 싶습니다.": [
    "B2C·D2C와 브랜드 IP에 관심이 있습니다. 일본과 베트남의 문화·시장에 대한 이해를 쌓으며 미래의 사업 가능성을 탐색하고 싶습니다.",
    "B2C・D2CとブランドIPに関心があります。日本とベトナムの文化・市場を理解し、将来の事業の可能性を探りたいです。",
    "I'm interested in B2C, D2C and brand IP, and want to explore future business possibilities through a deeper understanding of Japan and Vietnam.",
    "Tôi quan tâm B2C, D2C, IP thương hiệu và muốn tìm cơ hội kinh doanh tương lai qua hiểu biết về văn hóa, thị trường Nhật và Việt Nam.",
    "关注B2C、D2C和品牌IP，希望通过理解日本与越南文化及市场探索未来事业机会。"
  ],
  "삶의 가치": [
    "삶의 가치",
    "人生の価値観",
    "Personal values",
    "Giá trị sống",
    "人生价值"
  ],
  "신뢰 · 책임 · 유연한 태도": [
    "신뢰 · 책임 · 유연한 태도",
    "信頼・責任・柔軟な姿勢",
    "Trust · Responsibility · Flexibility",
    "Tin cậy · Trách nhiệm · Linh hoạt",
    "信任 · 责任 · 灵活态度"
  ],
  "고정된 생각에 머무르지 않고 계속 성장하며, 소중한 사람들과 서로의 성장을 돕는 삶을 지향합니다.": [
    "고정된 생각에 머무르지 않고 계속 성장하며, 소중한 사람들과 서로의 성장을 돕는 삶을 지향합니다.",
    "固定観念にとらわれず成長し、大切な人と互いの成長を支える人生を目指します。",
    "I want to keep growing beyond fixed assumptions and support mutual growth with the people I value.",
    "Tôi hướng đến cuộc sống không mắc kẹt trong suy nghĩ cũ, cùng những người quan trọng hỗ trợ nhau phát triển.",
    "希望不拘泥于固有想法持续成长，与珍视的人相互支持、共同进步。"
  ],
  "배움과 시야 확장": [
    "배움과 시야 확장",
    "学びと視野を広げる",
    "Learning and broadening horizons",
    "Học hỏi và mở rộng tầm nhìn",
    "学习与拓宽视野"
  ],
  "언어 · 여행 · 경제와 비즈니스 감각": [
    "언어 · 여행 · 경제와 비즈니스 감각",
    "語学・旅・経済とビジネス感覚",
    "Languages · Travel · Business understanding",
    "Ngôn ngữ · Du lịch · Tư duy kinh doanh",
    "语言 · 旅行 · 商业思维"
  ],
  "더 다양한 언어와 문화를 배우고 여행하며 시야를 넓히고 싶습니다. 경제와 비즈니스에 대한 이해도 함께 키우려 합니다.": [
    "더 다양한 언어와 문화를 배우고 여행하며 시야를 넓히고 싶습니다. 경제와 비즈니스에 대한 이해도 함께 키우려 합니다.",
    "多様な言語や文化を学び、旅を通じて視野を広げたいです。経済とビジネスへの理解も深めたいです。",
    "I want to broaden my horizons through languages, cultures and travel, while deepening my understanding of economics and business.",
    "Tôi muốn mở rộng tầm nhìn qua ngôn ngữ, văn hóa, du lịch và hiểu thêm về kinh tế, kinh doanh.",
    "希望通过语言、文化和旅行拓宽视野，同时加深经济与商业理解。"
  ],
  "기간별 실행 계획은 정리 중입니다. 아직 정하지 않은 기한이나 수치 목표는 기재하지 않았습니다.": [
    "기간별 실행 계획은 정리 중입니다. 아직 정하지 않은 기한이나 수치 목표는 기재하지 않았습니다.",
    "期間別の行動計画は整理中です。未定の期限や数値目標は記載していません。",
    "Time-based action plans are still being organized. Unset deadlines and numerical targets are not listed.",
    "Kế hoạch hành động theo thời gian đang được sắp xếp. Các thời hạn và mục tiêu định lượng chưa xác định không được ghi vào.",
    "分阶段行动计划仍在整理中，未确定的期限和数值目标未予列出。"
  ],
  "김도현 프로필 사진": [
    "김도현 프로필 사진",
    "キム・ドヒョンのプロフィール写真",
    "Profile photo of Kim Dohyun",
    "Ảnh đại diện của Kim Dohyun",
    "金道贤的个人照片"
  ]
};
