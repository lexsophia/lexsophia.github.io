/* LexSophia TEAP Speaking Original Mock Interview Bank (Parts 1-4 — Unofficial Practice) */
window.TEAP_SPEAKING_BANK = [
  {
    setId: 'S-SET-1',
    title: '模擬面接 Set 1（大学生活・環境・デジタル学習）',
    parts: [
      {
        part: 'Part 1',
        name: 'Part 1：インタビュー',
        prepSec: 0,
        speakSec: 45,
        badge: '導入質問 · 3問',
        instruction: '面接官からの質問を聞き、理由や具体例を添えて2〜3文以上で自然に答えましょう。',
        prompts: [
          'How do you usually spend your free time after school or on weekends?',
          'Which school subject have you enjoyed the most recently, and why?',
          'What kind of university club or activity would you like to join in the future?'
        ],
        modelResponse: 'On weekends, I usually spend time reading science magazines and jogging in a nearby park to refresh my mind. Recently, I have enjoyed biology the most because conducting lab experiments helps me understand how ecosystems actually work. At university, I would like to join an international exchange club so I can practice English while making friends from different cultures.',
        modelJa: '週末は気分転換に科学雑誌を読んだり近所の公園を走ったりして過ごしています。最近は生物が一番楽しく、実験を通じて生態系の仕組みを実感できるからです。大学では国際交流サークルに入り、異文化の友人を作りながら英語を実践したいです。',
        phrases: [
          'To refresh my mind, I usually...',
          'The reason I enjoy ... the most is that ...',
          'At university, I am hoping to join ... so that I can ...'
        ],
        checklist: [
          'Yes/Noや単語だけで終わらず、理由や具体例を添えて2文以上話せたか',
          '質問の時制（現在・過去・未来）に合わせて答えられたか',
          '黙り込まず、つなぎ言葉（Well, Actually等）で間をつなげたか'
        ]
      },
      {
        part: 'Part 2',
        name: 'Part 2：ロールプレイ',
        prepSec: 30,
        speakSec: 60,
        badge: '準備30秒 · 発話60秒',
        instruction: 'あなたは大学の図書館スタッフ（面接官）に、グループ発表用の学習室予約と資料探しについて相談しています。以下の3点を英語で質問・依頼してください。',
        cardPoints: [
          '1. 今週金曜の午後に4人で使える学習室を予約できるか尋ねる',
          '2. プロジェクターや大型モニターが使える部屋があるか確認する',
          '3. 発表テーマ（再生可能エネルギー）に関する論文データベースの使い方を案内してほしいと頼む'
        ],
        prompts: [
          'Hello, welcome to the university library information desk. How can I help you today?'
        ],
        modelResponse: 'Excuse me. My classmates and I are preparing a group presentation, and I was wondering if we could reserve a study room for four people this Friday afternoon. Also, do any of the available rooms have a projector or a large monitor we can connect a laptop to? Finally, our topic is renewable energy—could you show me how to search the library’s online database for academic articles on that subject?',
        modelJa: 'すみません、クラスメイトとグループ発表の準備をしていて、今週金曜の午後に4人用の学習室を予約できるか伺いたいです。また、空いている部屋の中にPCを繋げるプロジェクターか大型モニター付きの部屋はありますか？最後に、テーマが再生可能エネルギーなのですが、関連する学術論文をオンラインデータベースで検索する方法を教えていただけますか？',
        phrases: [
          'I was wondering if we could reserve...',
          'Do any of the available rooms have...?',
          'Could you show me how to search for...?'
        ],
        checklist: [
          'カードに書かれた3つのタスク（予約・設備確認・検索方法の依頼）をすべて伝えたか',
          '丁寧な依頼表現（Could you / I was wondering if...）を使えたか',
          '相手の立場（図書館スタッフ）にふさわしい自然な話し出しができたか'
        ]
      },
      {
        part: 'Part 3',
        name: 'Part 3：スピーチ',
        prepSec: 30,
        speakSec: 60,
        badge: '準備30秒 · スピーチ60秒',
        instruction: '次のトピックについて、自分の立場を明確にし、2つの理由または具体例を含めて約1分間スピーチしましょう。',
        topic: 'Should high schools replace printed textbooks with digital tablets for all classes?',
        prompts: [
          'Now, please give a one-minute speech on the topic: Should high schools replace printed textbooks with digital tablets for all classes?'
        ],
        modelResponse: 'In my opinion, high schools should not completely replace printed textbooks with digital tablets, although combining both is useful. First, paper textbooks help students stay focused. When students study on tablets, notifications and websites can easily distract them, and reading on screens for many hours causes eye strain. Second, printed books make it easier to compare pages side by side and write notes freely without worrying about battery life. Of course, tablets are lighter to carry and great for audio or video materials. Therefore, schools should use tablets as supplementary tools rather than replacing paper textbooks altogether.',
        modelJa: '私の意見では、併用は有益であっても、高校が紙の教科書をすべてタブレットに置き換えるべきではありません。第一に、紙の教科書は集中を保ちやすいからです。タブレットでは通知やサイトに気を取られやすく、長時間の画面閲覧は目の疲れも招きます。第二に、紙ならページを見比べたり充電を気にせず自由に書き込んだりしやすいです。もちろんタブレットは軽く音声や動画教材に優れています。したがって全面置換ではなく補助ツールとして活用すべきです。',
        phrases: [
          'In my opinion, ... should / should not ...',
          'First, ... / Second, ...',
          'Of course, some people argue that ... However, ... / Therefore, ...'
        ],
        checklist: [
          '冒頭で自分の立場（賛成／反対／条件付き）をはっきり述べたか',
          '理由や具体例を2つ整理して話せたか（First / Second等）',
          '最後に結論で締めて、45〜60秒のボリュームで話せたか'
        ]
      },
      {
        part: 'Part 4',
        name: 'Part 4：Q&A（深掘り質問）',
        prepSec: 0,
        speakSec: 60,
        badge: '関連質問 · 3問',
        instruction: 'Part 3のテーマに関連した少し抽象的な質問です。自分の考えと根拠を落ち着いて説明しましょう。',
        prompts: [
          'What skills do you think teachers need in order to use digital tools effectively in class?',
          'Do you think online learning will ever completely replace traditional classrooms? Why or why not?',
          'How can students avoid being distracted by smartphones when studying at home?'
        ],
        modelResponse: 'First, teachers need not only basic technical skills, but also the ability to decide when digital tools actually improve learning rather than using them just for convenience. Second, I do not think online classes will completely replace classrooms, because face-to-face discussions and group experiments build social skills that are hard to develop through a screen. Finally, students can avoid smartphone distractions by keeping their phones in another room and setting short twenty-five-minute study timers.',
        modelJa: 'まず教員には基本的な操作技術だけでなく、利便性のためではなく本当に学びを深める場面を見極めて使う力が必要です。次に、対面での議論や実験は画面越しでは育みにくい社会性を養うため、オンラインが教室を完全に代替するとは思いません。最後に、スマホを別室に置き25分の短いタイマーで集中する方法が有効です。',
        phrases: [
          'Not only ..., but also ...',
          'I do not think ... will completely replace ..., because ...',
          'One practical way to avoid ... is to ...'
        ],
        checklist: [
          '抽象的な問いに対して「自分の意見＋理由（または具体策）」で答えられたか',
          'Part 3と同じ表現の繰り返しを避け、別視点（教員・社会性・具体策）を出せたか',
          '最後まで聞こえやすい声量と自然なペースを保てたか'
        ]
      }
    ]
  },
  {
    setId: 'S-SET-2',
    title: '模擬面接 Set 2（地域貢献・留学・都市交通）',
    parts: [
      {
        part: 'Part 1',
        name: 'Part 1：インタビュー',
        prepSec: 0,
        speakSec: 45,
        badge: '導入質問 · 3問',
        instruction: '面接官からの質問を聞き、理由や具体例を添えて自然に答えましょう。',
        prompts: [
          'What do you like most about the town or city where you live?',
          'Have you ever participated in a volunteer activity or community event?',
          'If you had a chance to study abroad for a semester, where would you like to go?'
        ],
        modelResponse: 'What I like most about my hometown is its balance between convenient public transit and quiet green spaces along the river. Last summer, I volunteered at a local community center to help elementary school students with their summer homework, which taught me how to explain ideas clearly. If I could study abroad, I would choose Canada because of its multicultural environment and strong university research programs.',
        modelJa: '地元で一番好きなのは便利な公共交通と川沿いの静かな緑のバランスです。昨夏は地域のコミュニティセンターで小学生の宿題を手伝い、わかりやすく説明する力を学びました。留学できるなら多文化環境と大学研究が充実したカナダを選びたいです。',
        phrases: [
          'What I like most about ... is ...',
          'Last summer, I volunteered to ..., which taught me ...',
          'If I could ..., I would choose ... because of ...'
        ],
        checklist: [
          '3つの質問それぞれに具体的なエピソードや理由を添えられたか',
          '仮定法（If I could..., I would...）などの時制を自然に扱えたか',
          '発話のリズムが途切れずに答えられたか'
        ]
      },
      {
        part: 'Part 2',
        name: 'Part 2：ロールプレイ',
        prepSec: 30,
        speakSec: 60,
        badge: '準備30秒 · 発話60秒',
        instruction: 'あなたは大学の国際交流センター窓口（面接官）に、短期留学プログラムについて質問しています。以下の3点を英語で確認してください。',
        cardPoints: [
          '1. 夏休みの4週間プログラムの応募締切と必要な語学スコアを尋ねる',
          '2. 現地での滞在先がホームステイか学生寮かを確認する',
          '3. 奨学金制度があるかどうか、また説明会の日程を尋ねる'
        ],
        prompts: [
          'Good afternoon! This is the International Exchange Office. What can I help you with today?'
        ],
        modelResponse: 'Hello, I am interested in the four-week summer study-abroad program. Could you tell me when the application deadline is and what English score is required to apply? Also, I would like to check whether participants stay with a host family or in a university dormitory. Lastly, are there any scholarships available for this program, and when is the next information session?',
        modelJa: 'こんにちは、夏休みの4週間短期留学プログラムに興味があります。応募締切といくつの英語スコアが必要か教えていただけますか？また、滞在先はホームステイか大学寮かも確認したいです。最後に、このプログラムで使える奨学金はありますか？また次回の説明会はいつでしょうか？',
        phrases: [
          'Could you tell me when ... and what ...?',
          'I would like to check whether ... or ...',
          'Are there any ... available for this program?'
        ],
        checklist: [
          '締切＆スコア・滞在先・奨学金＆説明会の3点を漏れなく質問できたか',
          '間接疑問文（Could you tell me when... / check whether...）を正確に使えたか',
          '丁寧で聞き取りやすいトーンで話せたか'
        ]
      },
      {
        part: 'Part 3',
        name: 'Part 3：スピーチ',
        prepSec: 30,
        speakSec: 60,
        badge: '準備30秒 · スピーチ60秒',
        instruction: '次のトピックについて、自分の立場と2つの根拠を約1分間でスピーチしましょう。',
        topic: 'Should major cities restrict private cars in downtown areas to reduce air pollution?',
        prompts: [
          'Please give a one-minute speech on the following topic: Should major cities restrict private cars in downtown areas to reduce air pollution?'
        ],
        modelResponse: 'I believe major cities should restrict private cars in crowded downtown areas, provided that public transportation is well developed. First, fewer private cars directly reduce exhaust emissions and improve air quality for residents and commuters. Second, limiting car traffic creates safer, more walkable streets, which can actually boost business for local shops and cafés. Of course, exceptions are necessary for emergency vehicles, delivery trucks, and people with mobility difficulties. With frequent buses and trains in place, car restrictions make city centers healthier and more pleasant.',
        modelJa: '公共交通が十分整備されていることを条件に、大都市の中心部では自家用車を制限すべきだと思います。第一に、車の減少は排気ガスを直接減らし、住民や通勤者の空気質を改善します。第二に、車線を減らすことで安全で歩きやすい通りが生まれ、地元の店やカフェの賑わいにもつながります。もちろん緊急車両や配送車、移動に配慮が必要な人への例外は必須です。高頻度のバスや電車と組み合わせれば、都心はより健康的で快適になります。',
        phrases: [
          'I believe ..., provided that ...',
          'First, ... directly reduces ... / Second, ... creates ...',
          'Of course, exceptions are necessary for ...'
        ],
        checklist: [
          '条件付きの立場（provided that...）や明確な主張を最初に示せたか',
          '環境面・都市の快適さなど2つの軸で理由を展開できたか',
          '例外への配慮（緊急車両や高齢者等）にも触れて説得力を高められたか'
        ]
      },
      {
        part: 'Part 4',
        name: 'Part 4：Q&A（深掘り質問）',
        prepSec: 0,
        speakSec: 60,
        badge: '関連質問 · 3問',
        instruction: 'Part 3に関連する質問に、理由や具体例を添えて答えましょう。',
        prompts: [
          'How can city governments encourage more commuters to use bicycles or public transit?',
          'What challenges might local shop owners face if private cars are restricted downtown?',
          'Do you think young people today care more about environmental issues than previous generations?'
        ],
        modelResponse: 'City governments can encourage public transit by lowering commuter fares and building dedicated bike lanes separated from car traffic. As for local shop owners, they might initially worry about losing customers who drive from the suburbs, or about delays in receiving deliveries, so cities need convenient park-and-ride lots and scheduled delivery hours. Finally, I think young people today are very aware of climate change because they learn about it at school and see its effects in daily news.',
        modelJa: '自治体は通勤定期の値下げや車道と分離された自転車レーンの整備で利用を促せます。地元商店主は郊外からの車客の減少や配送の遅れを懸念するかもしれないため、パークアンドライド駐車場や配送時間帯の設定が必要です。最後に、今の若者は学校教育や日々のニュースで気候変動に触れているため環境意識が高いと思います。',
        phrases: [
          'City governments can encourage ... by ...',
          'As for ..., they might initially worry about ...',
          'I think ... because they learn about it ... and see ...'
        ],
        checklist: [
          '自治体・商店主・若者など質問の視点に合わせて柔軟に答えられたか',
          '課題だけでなく解決策（park-and-ride等）まで一言添えられたか',
          '60秒以内で要点をクリアにまとめられたか'
        ]
      }
    ]
  }
];
