'use strict';
const planLocales = {
  ko: {
    state:'문서 상태: 입력 기반 초안 · 검토 필요',
    headings:['기획 배경','목적 및 목표','핵심 대상','핵심 아이디어','실행 계획 (제안)','일정','예산','성과 측정','위험 요소 및 대응 (제안)','실행 전 확인'],
    audience:'검토 사항: 대상의 니즈, 행동 특성, 주요 접점에 대한 근거를 확인한다.',
    stages:['준비','제작·검증','실행·개선','회고'],
    steps:{marketing:['대상 고객의 니즈와 주요 접점을 조사하고 핵심 메시지를 정리한다.','채널별 콘텐츠와 참여 동선을 제작하고 소규모로 사전 점검한다.','캠페인을 운영하고 반응을 비교해 메시지와 노출 방식을 개선한다.'],event:['장소·참여 규모·운영 인력을 확인하고 프로그램을 설계한다.','모집 안내와 신청 동선을 준비하고 운영 리허설을 진행한다.','현장 운영과 안전 점검을 진행하고 참여자 의견을 수집한다.'],service:['사용자의 문제를 조사하고 핵심 요구사항을 정의한다.','최소 범위의 시안 또는 콘텐츠를 제작하고 사용자 피드백을 받는다.','피드백을 반영해 공개하고 사용·소비 흐름을 점검한다.']},
    review:'목표 대비 결과와 개선 사항을 정리한다.',
    noSchedule:'미정 — 시작일과 종료일 확인 필요',schedule:'준비 → 제작·검증 → 실행 → 회고 순으로 구성하고 단계별 마감일과 담당자를 확정한다.',
    noBudget:'미정 — 가용 예산 확인 필요',budget:'집행 항목 제안: 제작비, 홍보비, 운영비, 예비비. 견적과 배분 금액은 총예산 범위에서 별도로 확정한다.',
    metrics:{marketing:'도달 수, 참여자 수, 전환율',event:'신청자 수, 실제 참석률, 참여자 만족도',service:'이용자 수, 재방문율, 콘텐츠 완료율'},
    measure:'실행 전 기준값, 목표값, 수집 도구와 측정 주기를 정하고 종료 후 결과를 비교한다. 제안 지표의 목표 수치는 별도 확정이 필요하다.',
    risks:['참여 부족: 사전 수요를 확인하고 안내 채널과 메시지를 조정한다.','일정 지연: 담당자와 마감일을 정하고 핵심 실행 범위를 우선한다.','예산 초과: 집행 전 견적을 확인하고 변경 승인 기준을 정한다.'],
    checklist:['담당자 및 협업 역할 배정','일정·예산·성과 목표의 실현 가능성 확인','필요한 동의·저작권·운영 조건 확인','입력한 사실과 제안 내용 검토'],filename:'기획서-초안.txt'
  },
  ja: {
    state:'文書の状態：入力に基づく下書き・要確認',
    headings:['企画の背景','目的と目標','対象','中心となるアイデア','実行計画（提案）','スケジュール','予算','成果測定','リスクと対応（提案）','実行前の確認'],
    audience:'確認事項：対象のニーズ、行動特性、主な接点の根拠を確認する。',
    stages:['準備','制作・検証','実行・改善','振り返り'],
    steps:{marketing:['対象顧客のニーズと接点を調査し、主要メッセージを整理する。','チャネル別コンテンツと参加導線を制作し、小規模で事前確認する。','施策を運用し、反応を比較してメッセージと配信方法を改善する。'],event:['会場、参加規模、運営人員を確認し、プログラムを設計する。','募集案内と申込導線を準備し、運営リハーサルを行う。','当日の運営と安全確認を行い、参加者の意見を集める。'],service:['ユーザーの課題を調査し、主要要件を定義する。','最小限の試作やコンテンツを制作し、フィードバックを得る。','意見を反映して公開し、利用の流れを確認する。']},
    review:'目標に対する結果と改善点を整理する。',noSchedule:'未定 — 開始日と終了日の確認が必要',schedule:'準備 → 制作・検証 → 実行 → 振り返りの順に、期限と担当者を確定する。',
    noBudget:'未定 — 利用可能な予算の確認が必要',budget:'費目の提案：制作費、広報費、運営費、予備費。見積もりと配分は総予算の範囲内で別途確定する。',
    metrics:{marketing:'リーチ数、参加者数、転換率',event:'申込者数、出席率、参加者満足度',service:'利用者数、再訪率、コンテンツ完了率'},
    measure:'実施前に基準値、目標値、測定ツール、測定頻度を定め、終了後に比較する。提案指標の目標値は別途確定する。',
    risks:['参加不足：事前の需要を確認し、案内チャネルとメッセージを調整する。','遅延：担当者と期限を決め、重要な実施範囲を優先する。','予算超過：事前に見積もりを確認し、変更承認の基準を定める。'],
    checklist:['担当者と協力者の役割を決める','日程、予算、成果目標の実現可能性を確認する','必要な同意、著作権、運営条件を確認する','入力した事実と提案を確認する'],filename:'企画書-下書き.txt'
  },
  en: {
    state:'Status: input-based draft · review required',
    headings:['Background','Purpose and objectives','Target audience','Core idea','Execution plan (suggested)','Schedule','Budget','Success measurement','Risks and responses (suggested)','Pre-launch checklist'],
    audience:'Review: verify evidence for audience needs, behaviors and key touchpoints.',stages:['Preparation','Production and validation','Execution and improvement','Review'],
    steps:{marketing:['Research audience needs and touchpoints; define the core message.','Create channel-specific content and participation flows, then run a small pilot.','Run the campaign, compare responses and refine messaging and distribution.'],event:['Confirm the venue, capacity and staffing, then design the program.','Prepare recruitment and registration materials and rehearse operations.','Manage the event, check safety and collect participant feedback.'],service:['Research user problems and define core requirements.','Build a minimal prototype or content sample and collect user feedback.','Publish after incorporating feedback and review the user journey.']},
    review:'Compare results with objectives and document improvements.',noSchedule:'To be confirmed — set start and end dates',schedule:'Sequence: preparation → production and validation → execution → review. Assign owners and deadlines for each stage.',
    noBudget:'To be confirmed — establish available funding',budget:'Suggested categories: production, promotion, operations and contingency. Confirm quotes and allocations separately within the total budget.',
    metrics:{marketing:'Reach, participant count, conversion rate',event:'Registrations, attendance rate, participant satisfaction',service:'Users, return rate, content completion rate'},
    measure:'Set baselines, targets, measurement tools and frequency before execution; compare final results. Targets for suggested metrics must be confirmed.',
    risks:['Low participation: validate demand and adjust outreach channels and messaging.','Delays: assign owners and deadlines; prioritize essential scope.','Budget overruns: confirm quotes in advance and define change approval rules.'],
    checklist:['Assign owners and collaborator roles','Check feasibility of schedule, budget and targets','Check required consent, copyright and operating conditions','Review input facts and suggestions'],filename:'proposal-draft.txt'
  },
  vi: {
    state:'Trạng thái: bản nháp theo thông tin đầu vào · cần kiểm tra',
    headings:['Bối cảnh','Mục đích và mục tiêu','Đối tượng','Ý tưởng chính','Kế hoạch triển khai (đề xuất)','Lịch trình','Ngân sách','Đo lường kết quả','Rủi ro và ứng phó (đề xuất)','Kiểm tra trước triển khai'],
    audience:'Cần kiểm tra: căn cứ về nhu cầu, hành vi và các điểm tiếp xúc chính của đối tượng.',stages:['Chuẩn bị','Sản xuất và kiểm chứng','Triển khai và cải tiến','Đánh giá'],
    steps:{marketing:['Nghiên cứu nhu cầu, điểm tiếp xúc và xác định thông điệp chính.','Tạo nội dung theo từng kênh, thiết kế luồng tham gia và thử nghiệm quy mô nhỏ.','Triển khai chiến dịch, so sánh phản hồi và cải thiện thông điệp, cách phân phối.'],event:['Xác nhận địa điểm, quy mô, nhân sự và thiết kế chương trình.','Chuẩn bị thông tin tuyển người, quy trình đăng ký và diễn tập vận hành.','Vận hành sự kiện, kiểm tra an toàn và thu thập phản hồi.'],service:['Nghiên cứu vấn đề của người dùng và xác định yêu cầu cốt lõi.','Tạo mẫu thử hoặc nội dung tối thiểu và thu thập phản hồi.','Điều chỉnh theo phản hồi, công bố và kiểm tra hành trình sử dụng.']},
    review:'So sánh kết quả với mục tiêu và ghi lại điểm cần cải thiện.',noSchedule:'Chưa xác định — cần ngày bắt đầu và kết thúc',schedule:'Thứ tự: chuẩn bị → sản xuất và kiểm chứng → triển khai → đánh giá. Xác định người phụ trách và hạn chót từng giai đoạn.',
    noBudget:'Chưa xác định — cần xác nhận ngân sách hiện có',budget:'Hạng mục đề xuất: sản xuất, quảng bá, vận hành và dự phòng. Xác nhận báo giá và phân bổ riêng trong tổng ngân sách.',
    metrics:{marketing:'Lượt tiếp cận, số người tham gia, tỷ lệ chuyển đổi',event:'Số đăng ký, tỷ lệ tham dự, mức hài lòng',service:'Số người dùng, tỷ lệ quay lại, tỷ lệ hoàn thành nội dung'},
    measure:'Xác định mức cơ sở, mục tiêu, công cụ và tần suất đo trước khi triển khai; so sánh kết quả sau cùng. Cần xác nhận giá trị mục tiêu cho các chỉ số đề xuất.',
    risks:['Ít người tham gia: kiểm tra nhu cầu và điều chỉnh kênh, thông điệp.','Chậm tiến độ: chỉ định người phụ trách, hạn chót và ưu tiên phạm vi thiết yếu.','Vượt ngân sách: xác nhận báo giá trước và quy định phê duyệt thay đổi.'],
    checklist:['Phân công người phụ trách và vai trò cộng tác','Kiểm tra tính khả thi của lịch, ngân sách và mục tiêu','Kiểm tra sự đồng ý, bản quyền và điều kiện vận hành cần thiết','Kiểm tra thông tin đầu vào và nội dung đề xuất'],filename:'ban-nhap-ke-hoach.txt'
  },
  'zh-CN': {
    state:'文档状态：基于输入的初稿 · 需审核',
    headings:['策划背景','目的与目标','目标群体','核心创意','执行计划（建议）','时间安排','预算','成效衡量','风险与应对（建议）','执行前检查'],
    audience:'审核事项：核实目标群体需求、行为特征和主要触点的依据。',stages:['准备','制作与验证','执行与改进','复盘'],
    steps:{marketing:['调研目标群体需求与主要触点，明确核心信息。','制作各渠道内容与参与流程，进行小规模测试。','执行营销活动，对比反馈并优化信息与投放方式。'],event:['确认场地、参与规模和人员，设计活动流程。','准备招募通知和报名流程，开展运营彩排。','开展现场运营与安全检查，收集参与者反馈。'],service:['调研用户问题，定义核心需求。','制作最小可行原型或内容，收集用户反馈。','根据反馈调整并发布，检查用户使用流程。']},
    review:'对照目标整理结果与改进事项。',noSchedule:'待定 — 需确认开始和结束日期',schedule:'按准备 → 制作与验证 → 执行 → 复盘的顺序，确定各阶段负责人和截止日期。',
    noBudget:'待定 — 需确认可用预算',budget:'建议费用项：制作、推广、运营和预备金。报价与分配金额需在总预算内另行确定。',
    metrics:{marketing:'触达量、参与人数、转化率',event:'报名人数、出席率、参与者满意度',service:'用户数、回访率、内容完成率'},
    measure:'执行前确定基准值、目标值、测量工具和频率，结束后对比结果。建议指标的具体目标值需另行确定。',
    risks:['参与不足：验证需求，调整宣传渠道与信息。','进度延迟：确定负责人和截止日期，优先执行核心范围。','预算超支：事先确认报价，制定变更审批标准。'],
    checklist:['分配负责人和协作角色','确认时间、预算和目标的可行性','检查必要的同意、版权和运营条件','审核输入事实和建议内容'],filename:'策划书-初稿.txt'
  }
};
