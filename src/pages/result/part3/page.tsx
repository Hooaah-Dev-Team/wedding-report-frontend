import { Fragment } from "react/jsx-runtime";

import { BarChart } from "@/components/BarChart";
import { ReportHeader } from "@/components/ReportHeader";

interface Part3ResultPageProps {
  step: number;
}

export default function Part3ResultPage({ step }: Part3ResultPageProps) {
  return (
    <main className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {step === 1 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            3. 36개월 신혼생활 시뮬레이션
          </h1>
          <article className="flex flex-col gap-5 px-10 py-5 leading-snug text-[#7E7E7E]">
            <p>
              <b>
                결혼 초반 3년은 관계의 정착 여부와 질적 방향성을 결정짓는 핵심
                구간
              </b>
              입니다.
              <br />
              통계적으로도 한국의 부부 이혼은 결혼 후 1~4년 사이에 가장 빈번하게
              발생하며,
              <br />
              그중 1년차~3년차 이혼율이 전체 이혼의 약 30% 이상을 차지하고
              있습니다.
            </p>
            <p>
              <b>그 이유는 단순한 &quot;성격 차이&quot; 이상의 문제—</b>즉,
              아래와 같은 요인들로 나누어 볼 수 있습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>정서 표현 방식의 충돌</li>
              <li>역할에 대한 기대의 불일치</li>
              <li>가족·금전·생활 습관에 대한 기준 차이</li>
            </ul>
            <p>
              그러므로 결혼 초기 3년은 단순히 함께 살아가는 적응기가 아닙니다.
              <br />
              <b>
                서로의 모습을 더 깊이 알아가며, 두 사람만의 새로운 관계 방식을
                만들어가는 과정
              </b>
              입니다.
            </p>
            <p>
              이 시뮬레이션 리포트는 결혼 생활 3년간 겪게 되는 주요 변화들을
              미리 살펴볼 수 있도록 구성되어 있습니다.
            </p>
          </article>
        </Fragment>
      )}
      {step === 2 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            [1년차 시뮬레이션]
          </h1>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug text-[#7E7E7E]">
            <div className="flex flex-col items-center gap-2.5">
              <div className="rounded-full bg-[#B3E5DA] px-10 py-2.5 font-bold text-white">
                1년 차
              </div>
              <p className="border-t border-[#B3E5DA] py-5">
                결혼 1년 차는 기대와 설렘이 공존하는 시기입니다. 서로에 대한
                애정, ‘함께 산다’는 새로움 자체가 기쁨과 충만함을 안겨주지만,
                일상의 궤도 안에서는 조용한 균열과 미세한 충돌이 서서히 드러나기
                시작합니다.
              </p>
            </div>
            <p>대표적인 갈등 지점은 다음과 같습니다:</p>
            <ul className="list-disc space-y-1 pl-5 font-bold">
              <li>집안일 분담 방식</li>
              <li>여가와 휴식의 패턴 차이</li>
              <li>감정 표현 방식과 언어의 온도차</li>
              <li>의사결정에서의 우선순위 불일치</li>
            </ul>
            <p>
              이러한 차이들은 단순한 성격 차이를 넘어서,{" "}
              <b>’각자가 살아온 환경과 관계 경험에서 비롯된 ‘기준의 차이’</b>로
              해석될 수 있습니다. 따라서 이 시기의 핵심 과제는, 그 차이를
              없애거나 맞추는 것이 아니라{" "}
              <b>관찰하고 조율하는 ‘공동 리듬’을 어떻게 형성하느냐</b>에 달려
              있습니다.
            </p>
            <p>
              즉, 결혼 1년 차는 연애 관계에서 <b>‘생활 공동체’로의 전환</b>이
              이루어지는 시기로, 서로가 단지 감정의 대상이 아니라,{" "}
              <b>협력적 구조를 함께 만들어가는 파트너</b>로 자리 잡아가는 초기
              단계입니다.
            </p>
            <p>
              이 시기의 경험이 건설적일 경우, 부부는 이후 갈등 상황에서도{" "}
              <b>감정을 설명하고 반응하는 자기만의 대화법과 협상 방식</b>을 갖게
              되며, 이는 관계의 안정성과 회복탄력성에 결정적 기반이 됩니다.
            </p>
          </article>
        </Fragment>
      )}
      {step === 3 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 1 - 3
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  생활 공간을 꾸미며 드러난 결정 방식의 차이
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                결혼 초, 두 사람은 신혼집을 꾸미며 바쁜 시간을 보냅니다. {"\n"}
                가구를 고르고, 벽지를 고르고, 생활 루틴을 정하는 과정에서 두
                사람의 정보 처리 속도와 안정감의 기준이 드러납니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.”
                  현서:“그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.”
                  도현:“그냥 이걸로 가죠.” 현서:“그럼 다음 주에 다시 봐요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                대화는 길었지만 결론은 나지 않습니다. 도현은 정해놓아야 마음이
                편하고, 현서는 확신이 들어야 마음이 놓입니다. 둘 다
                논리적이지만, 안정감을 얻는 방식이 다릅니다. 이 시기의 핵심은
                ‘누가 주도하느냐’가 아니라 서로의 판단 구조를 이해하기 시작한
                시기라는 점입니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 4 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 4 - 6
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  집안의 문제를 해결하며 역할이 나뉘기 시작한 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                생활이 안정되면서, 실제적인 일이 생깁니다. 가전이 고장 나거나,
                일정이 겹치는 등 즉흥적인 대응이 필요한 순간마다 서로의 대처가
                달라집니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “그냥 새로 사죠. 오래된 거라 또 고장날 수도 있어요.”
                  현서: “일단 고쳐보죠. 고치는 게 훨씬 경제적이에요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 즉시 행동으로 문제를 통제하려 하고, 현서는 상황 분석을
                통해 리스크를 줄이려 합니다. 결정의 속도는 다르지만, 둘
                다 현실적인 해결을 추구합니다. 이런 경험이 반복되면서, 도현이
                먼저 움직이고 현서가 검토하는 자연스러운 역할 분담 구조가
                생깁니다. 둘 다 외부 지원(정보, 전문가 도움 등)을 선호하기
                때문에, 결정 과정에 ‘제3자의 자료’가 자주 등장하는 것도
                특징입니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 5 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 7 - 9
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  일과 감정이 섞이기 시작한 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                가을, 현서가 직장에서 승진 제안을 받으며 관계의 초점이
                ‘집안일’에서 ‘정서적 지원’으로 이동합니다. 현서는 새로운 역할에
                부담을 느끼고, 도현은 실질적 조언으로 도움을 주려 하지만 그
                과정에서 감정의 온도가 어긋납니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  현서: “팀장 지원하라는 얘기 나왔어요.” 도현: “그럼 하면 되죠.
                  잘할 수 있을 거예요.” 현서: “그게 말처럼 쉽지 않아요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 논리로 격려하고, 현서는 감정으로 공감받길 원합니다.
                하지만 이 시기를 지나며, 도현은 “지켜보는 것이 도움일 수 있다”는
                걸 배우고, 현서는 “상대의 방식이 다를 뿐 무관심은 아니라는 것”을
                이해합니다. 서로의 감정적 리듬을 맞추기 시작하면서 대화는 ‘문제
                해결’ 중심에서 ‘상황 공유’ 중심으로 바뀝니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 6 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 10 - 12
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  재정과 계획을 함께 논의하며 현실을 맞춘 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                연말이 다가오며, 적금 만기와 생활비 분배 같은 구체적이고 숫자가
                드러나는 대화가 잦아집니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “이 돈 그냥 두는 건 아깝잖아요.” 현서: “괜히 잃으면 더
                  아까워요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 기회 비용을, 현서는 손실 회피를 먼저 떠올립니다. 둘 다
                합리적이지만, 계산의 출발점이 다릅니다. 논의는 쉽게 결론나지
                않지만, 대화를 통해 서로의 판단 기준이 구체화됩니다. 결국 절반은
                예금, 절반은 투자라는 중간 합의로 정리됩니다. 이 시기부터 두
                사람은 ‘누가 옳은가’보다 ‘어떤 기준으로 결정할까’를 함께 세우는
                연습을 시작합니다. 이 변화는 결혼생활의 피로도를 크게 줄이는
                요인으로 작동합니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 7 && (
        <Fragment>
          <article className="flex flex-col gap-10 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="text-center text-lg font-bold text-[#111111]">
                긴장도
              </h2>
              <section className="flex flex-col gap-7.5">
                <BarChart values={[10, 10, 10, 10]} barColor="#B3D4F5" />
                <div className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
                  <p className="whitespace-pre-wrap">
                    1년 차에는 서로에 대한 이해와 기대 사이에서 작은 마찰이
                    일어납니다. 큰 싸움은 아니지만, ‘기대와 다른 방식’에서 오는
                    잔잔한 긴장이 누적됩니다. 잔물결에 가까운 긴장입니다.
                  </p>
                  <p className="whitespace-pre-wrap">
                    결혼 생활에서 긴장이 생기는 것은 누구나 겪는 자연스러운
                    흐름입니다. <b>긴장의 파형</b>을 함께 이해하고 넘어서는
                    경험은 관계를 더욱 견고하게 만듭니다.
                  </p>
                </div>
              </section>
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="text-center text-lg font-bold">
                “서로에게 리듬을 맞춰가는 첫 1년”
              </h2>
              <p className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]">
                결혼 초기에는 대화가 자연스럽고, 감정의 결도 비슷하게
                맞아떨어진다는 느낌을 받기 쉽습니다. {"\n"}“이 사람이라면
                괜찮겠다”는 확신이 생기고, 그 확신이 관계의 출발점이 됩니다.
                {"\n"}
                하지만 시간이 지나면서 각자의 피로도, 말하는 타이밍, 결정하는
                방식 등에서 차이가 하나둘 드러나기 시작합니다.
              </p>
              <p className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]">
                같은 공간에 있는데 엇갈리는 감정, 같은 주제를 두고 다른 속도로
                반응하는 상황이 반복되면서 <b>“이상하게 어긋난다”</b>는 느낌이
                생길 수 있습니다. 이 시기를 지나며 부부는 조금씩 깨닫게 됩니다.{" "}
                <b>
                  같은 리듬으로 움직이진 않아도, 서로를 챙기는 방식이 다를 뿐
                </b>
                이라는 것을요.
              </p>
            </section>
            <section className="result-gradient flex flex-col gap-5 p-5">
              <h3 className="text-center leading-snug font-semibold text-[#3EA38D]">
                🧭 1년 차 부부를 위한 질문
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-center">
                <li>우리는 요즘 무엇에 가장 많은 에너지를 쓰고 있는가?</li>
                <li>서로의 불안과 피로를 같은 방향에서 보고 있는가?</li>
                <li>&apos;우리의 결정 방식&apos;에 대해 동의하고 있는가?</li>
                <li>
                  요즘 나는, 이 사람과 어떤 주제를 가장 자주 이야기하고 있는가?
                </li>
              </ul>
            </section>
          </article>
        </Fragment>
      )}
      {step === 8 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            3. 36개월 신혼생활 시뮬레이션
          </h1>
          <div className="flex-5" />
          <section className="flex flex-col gap-7.5 px-10 py-5">
            <span className="text-center text-lg leading-snug font-medium">
              “ 첫 해를 지나온 두 사람에게는 무엇이 가장 소중할까요? “
            </span>
            <span className="text-center leading-snug text-[#7E7E7E]">
              말하지 않으면 알 수 없고, 듣지 않으면 다가갈 수 없습니다.
            </span>
          </section>
          <div className="flex-9" />
        </Fragment>
      )}
      {step === 9 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            [2년차 시뮬레이션]
          </h1>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug text-[#7E7E7E]">
            <div className="flex flex-col items-center gap-2.5">
              <div className="rounded-full bg-[#B3E5DA] px-10 py-2.5 font-bold text-white">
                2년 차
              </div>
              <p className="border-t border-[#B3E5DA] py-5">
                결혼 1년 차는 감정적 연결과 기대감이 중심에 있었던 시기였습니다.
                서로의 다름을 이해하는 연습이 막 시작되었고,{" "}
                <b>갈등은 주로 말하기 애매한 감정의 층위에서 서서히 축적</b>
                되었습니다. 특히{" "}
                <b>
                  생활 공간을 공유하면서 생겨나는 사소하지만 반복적인 판단 차이
                </b>
                는, ‘이걸 꼭 말해야 하나’ 싶은 순간들 속에 쌓이면서 관계의
                지형을 조금씩 바꾸기 시작합니다.
              </p>
            </div>
            <p>이 시기의 부부는 다음과 같은 질문에 직면하게 됩니다:</p>
            <ul className="list-disc space-y-1 pl-5 font-bold">
              <li>“우리 가계 기준은 어디에 맞춰야 하지?”</li>
              <li>“가족이 우리 삶에 개입할 수 있는 선은 어디까지인가?”</li>
              <li>
                “서로의 일과 커리어를 어느 수준으로 존중하고 양보해야 할까?”
              </li>
              <li>
                “주말, 휴식, 돈, 결정 방식까지... 이 모든 걸 누가 중심을 잡아야
                하지?”
              </li>
            </ul>
            <p>
              이러한 문제는 감정만으로 해결되지 않습니다. 2년 차에 요구되는 것은
              감정에 반응하는 방식이 아니라,{" "}
              <b>현실을 설계하고 합의하는 태도</b>
              입니다. 또한 이 시기의 특징 중 하나는, 이견이 생겼을 때 바로
              대화로 풀지 못하고 비교, 오해, 침묵으로 이어지기 쉽다는 점입니다.
              외부로부터의 압박(부모의 요청, 주택 시장의 변화, 출산 또는 커리어
              압력 등)이 심화되면서 <b>관계 내부의 구조가 얼마나 안정적인가</b>
              가 시험대에 오릅니다.
            </p>
            <p>
              즉, 결혼은 이제 정서적 유대만으로 유지되지 않습니다.{" "}
              <b>
                현실적 선택을 함께 설계할 수 있는 합의의 힘, 판단의 기준, 조율의
                기술
              </b>
              이 필요해지는 시기입니다.
            </p>
          </article>
        </Fragment>
      )}
      {step === 10 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 1 - 3
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  생활 공간을 꾸미며 드러난 결정 방식의 차이
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                결혼 초, 두 사람은 신혼집을 꾸미며 바쁜 시간을 보냅니다. {"\n"}
                가구를 고르고, 벽지를 고르고, 생활 루틴을 정하는 과정에서 두
                사람의 정보 처리 속도와 안정감의 기준이 드러납니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.”
                  현서:“그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.”
                  도현:“그냥 이걸로 가죠.” 현서:“그럼 다음 주에 다시 봐요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                대화는 길었지만 결론은 나지 않습니다. 도현은 정해놓아야 마음이
                편하고, 현서는 확신이 들어야 마음이 놓입니다. 둘 다
                논리적이지만, 안정감을 얻는 방식이 다릅니다. 이 시기의 핵심은
                ‘누가 주도하느냐’가 아니라 서로의 판단 구조를 이해하기 시작한
                시기라는 점입니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 11 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 4 - 6
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  집안의 문제를 해결하며 역할이 나뉘기 시작한 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                생활이 안정되면서, 실제적인 일이 생깁니다. 가전이 고장 나거나,
                일정이 겹치는 등 즉흥적인 대응이 필요한 순간마다 서로의 대처가
                달라집니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “그냥 새로 사죠. 오래된 거라 또 고장날 수도 있어요.”
                  현서: “일단 고쳐보죠. 고치는 게 훨씬 경제적이에요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 즉시 행동으로 문제를 통제하려 하고, 현서는 상황 분석을
                통해 리스크를 줄이려 합니다. 결정의 속도는 다르지만, 둘
                다 현실적인 해결을 추구합니다. 이런 경험이 반복되면서, 도현이
                먼저 움직이고 현서가 검토하는 자연스러운 역할 분담 구조가
                생깁니다. 둘 다 외부 지원(정보, 전문가 도움 등)을 선호하기
                때문에, 결정 과정에 ‘제3자의 자료’가 자주 등장하는 것도
                특징입니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 12 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 7 - 9
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  일과 감정이 섞이기 시작한 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                가을, 현서가 직장에서 승진 제안을 받으며 관계의 초점이
                ‘집안일’에서 ‘정서적 지원’으로 이동합니다. 현서는 새로운 역할에
                부담을 느끼고, 도현은 실질적 조언으로 도움을 주려 하지만 그
                과정에서 감정의 온도가 어긋납니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  현서: “팀장 지원하라는 얘기 나왔어요.” 도현: “그럼 하면 되죠.
                  잘할 수 있을 거예요.” 현서: “그게 말처럼 쉽지 않아요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 논리로 격려하고, 현서는 감정으로 공감받길 원합니다.
                하지만 이 시기를 지나며, 도현은 “지켜보는 것이 도움일 수 있다”는
                걸 배우고, 현서는 “상대의 방식이 다를 뿐 무관심은 아니라는 것”을
                이해합니다. 서로의 감정적 리듬을 맞추기 시작하면서 대화는 ‘문제
                해결’ 중심에서 ‘상황 공유’ 중심으로 바뀝니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 13 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 10 - 12
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  재정과 계획을 함께 논의하며 현실을 맞춘 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                연말이 다가오며, 적금 만기와 생활비 분배 같은 구체적이고 숫자가
                드러나는 대화가 잦아집니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “이 돈 그냥 두는 건 아깝잖아요.” 현서: “괜히 잃으면 더
                  아까워요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 기회 비용을, 현서는 손실 회피를 먼저 떠올립니다. 둘 다
                합리적이지만, 계산의 출발점이 다릅니다. 논의는 쉽게 결론나지
                않지만, 대화를 통해 서로의 판단 기준이 구체화됩니다. 결국 절반은
                예금, 절반은 투자라는 중간 합의로 정리됩니다. 이 시기부터 두
                사람은 ‘누가 옳은가’보다 ‘어떤 기준으로 결정할까’를 함께 세우는
                연습을 시작합니다. 이 변화는 결혼생활의 피로도를 크게 줄이는
                요인으로 작동합니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 14 && (
        <Fragment>
          <article className="flex flex-col gap-10 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="text-center text-lg font-bold text-[#111111]">
                정서 연결도
              </h2>
              <section className="flex flex-col gap-7.5">
                <BarChart values={[10, 10, 10, 10]} barColor="#67E4C8" />
                <div className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
                  <p className="whitespace-pre-wrap">
                    2년 차가 되면 반복되는 갈등과 현실적 압박을 통과하며, 서로의{" "}
                    <b>불안·상처·한계</b>를 더 자주 접하게 됩니다. 이때는
                    ‘가깝지만 상처받기 쉬운’ 상태이기도 합니다.
                  </p>
                  <p className="whitespace-pre-wrap">
                    갈등과 압박을 회피하지 않고 대화하고 회복한 경험들이
                    쌓이면서, 정서 연결은 점차 수직적으로 깊어지기 시작합니다.
                    이 시기를 <b>“관계의 전환점”</b>이라 부를 수 있습니다.
                  </p>
                </div>
              </section>
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="text-center text-lg font-bold">
                “정체성의 균형을 찾아가는 2년차”
              </h2>
              <p className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]">
                결혼 첫해가 서로의 차이를 발견하고 조율하는 시간이었다면, 두
                번째 해에는 조금 더 깊은 질문이 찾아옵니다.{"\n"}
                <b>
                  “나는 여전히 나일까, 아니면 이제는 배우자로서의 내가 더 큰
                  걸까?”{"\n"}
                </b>
                이 정체성의 혼란은 친구, 직장, 부모님, 돈과 집 같은 문제 속에서
                불쑥 드러나곤 합니다. {"\n"}겉으로는 단순한 일정이나 돈 문제
                같아 보여도, 그 안에는 <b>“무엇을 더 중요하게 여기는가”</b>라는
                가치의 충돌이 숨어 있습니다.
              </p>
              <p className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]">
                둘 다 말하지 않는 것이 배려라고 생각한 적이 있었습니다. 속삭이는
                논리적으로 &quot;이해된다&quot;며 감정을 억눌렀고, 슥삭이는
                &quot;괜찮다&quot;는 말을 액면 그대로 받아들였습니다. 하지만
                침묵은 평화가 아니라 시한폭탄이었습니다.
              </p>
            </section>
            <section className="result-gradient flex flex-col gap-5 p-5">
              <h3 className="text-center leading-snug font-semibold text-[#3EA38D]">
                🧭 2년 차 부부를 위한 질문
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-center">
                <li>
                  2년 동안 내가 가장 많이 양보한 부분은 무엇이고, 그것이 지속
                  가능한가?
                </li>
                <li>
                  나는 상대방의 성공을 진심으로 응원하고 있는가, 아니면 조건부로
                  지지하고 있는가?
                </li>
                <li>만약 지금 상황이 5년, 10년 계속된다면 우리는 행복할까?</li>
                <li>
                  우리가 함께 내린 결정 중에 다시 재검토해야 할 것들은 무엇인가?
                </li>
              </ul>
            </section>
          </article>
        </Fragment>
      )}
      {step === 15 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            3. 36개월 신혼생활 시뮬레이션
          </h1>
          <div className="flex-5" />
          <section className="flex flex-col gap-7.5 px-10 py-5">
            <span className="text-center text-lg leading-snug font-medium">
              “ 미래의 기반을 다지는 결혼 3년차 “
            </span>
            <span className="text-center leading-snug text-[#7E7E7E]">
              두 사람이 함께 쌓아온 신뢰가 앞으로의 행복의 기초가 됩니다.
            </span>
          </section>
          <div className="flex-9" />
        </Fragment>
      )}
      {step === 16 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            [3년차 시뮬레이션]
          </h1>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug text-[#7E7E7E]">
            <div className="flex flex-col items-center gap-2.5">
              <div className="rounded-full bg-[#B3E5DA] px-10 py-2.5 font-bold text-white">
                3년 차
              </div>
              <p className="border-t border-[#B3E5DA] pt-5">
                결혼 2년 차까지는 주로 <b>현실적 의사결정의 충돌과 조율 미숙</b>
                에서 오는 긴장이 반복되는 시기였습니다. 커리어, 가족, 주거, 재정
                등 중요한 삶의 기준들이 ‘내 방식’과 ‘상대 방식’으로 맞부딪히며,
                감정의 피로도가 높아지고 갈등의 패턴도 고착화되는 경향이
                나타납니다.
              </p>
            </div>
            <p>
              그러나 3년 차에 들어서면서, 이 반복되는 갈등을 다루는 방식에 질적
              변화의 가능성이 열리기 시작합니다:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                감정이 쌓이던 시기에서 → <b>감정을 ‘말할 수 있는’ 시기</b>로
              </li>
              <li>
                일방적 양보의 피로에서 → <b>공동 결정의 프레임</b>으로
              </li>
              <li>
                오해와 방어의 패턴에서 → <b>존중과 해석의 노력</b>으로
              </li>
            </ul>
            <p>
              3년 차는 감정적 거리두기나 권태가 찾아올 수 있는 시기이지만,
              동시에, 그동안 축적된 갈등과 관계 경험을 바탕으로{" "}
              <b>더 나은 팀워크로의 전환 가능성</b>이 생기는 첫 출발점이기도
              합니다. 이 시기에는 다음과 같은 능력이 중요해집니다:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>감정을 해석하고 표현하는 언어의 정교화</li>
              <li>생활 기준에 대한 공동의 판단력</li>
              <li>과거의 패턴에서 벗어나려는 유연성</li>
              <li>
                외부 압력(가족, 사회, 직장 등)에 대한 <b>부부 내부 합의의 힘</b>
              </li>
            </ul>
            <p>
              만약 이 시기의 감정과 의견이 안전하게 공유될 수 있는 관계적 기초가
              형성되어 있다면, 부부는 단순한 생활 운영을 넘어서{" "}
              <b>심리적 협력자이자 인생 동반자로서의 관계</b>로 나아갈 수
              있습니다.
            </p>
            <p>
              3년 차는 갈등을 다루는 방식의 진화가 일어나는 시기입니다. 만약 이
              시기의 감정과 의견을 안전하게 나눌 수 있는 관계적 기초가 있다면,
              두 사람은 함께 해서 더 든든하고 행복한 길을 동반자가 되어가는
              방향으로 충분히 나아갈 수 있습니다.
            </p>
          </article>
        </Fragment>
      )}
      {step === 17 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 1 - 3
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  생활 공간을 꾸미며 드러난 결정 방식의 차이
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                결혼 초, 두 사람은 신혼집을 꾸미며 바쁜 시간을 보냅니다. {"\n"}
                가구를 고르고, 벽지를 고르고, 생활 루틴을 정하는 과정에서 두
                사람의 정보 처리 속도와 안정감의 기준이 드러납니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.”
                  현서:“그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.”
                  도현:“그냥 이걸로 가죠.” 현서:“그럼 다음 주에 다시 봐요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                대화는 길었지만 결론은 나지 않습니다. 도현은 정해놓아야 마음이
                편하고, 현서는 확신이 들어야 마음이 놓입니다. 둘 다
                논리적이지만, 안정감을 얻는 방식이 다릅니다. 이 시기의 핵심은
                ‘누가 주도하느냐’가 아니라 서로의 판단 구조를 이해하기 시작한
                시기라는 점입니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 18 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 4 - 6
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  집안의 문제를 해결하며 역할이 나뉘기 시작한 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                생활이 안정되면서, 실제적인 일이 생깁니다. 가전이 고장 나거나,
                일정이 겹치는 등 즉흥적인 대응이 필요한 순간마다 서로의 대처가
                달라집니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “그냥 새로 사죠. 오래된 거라 또 고장날 수도 있어요.”
                  현서: “일단 고쳐보죠. 고치는 게 훨씬 경제적이에요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 즉시 행동으로 문제를 통제하려 하고, 현서는 상황 분석을
                통해 리스크를 줄이려 합니다. 결정의 속도는 다르지만, 둘
                다 현실적인 해결을 추구합니다. 이런 경험이 반복되면서, 도현이
                먼저 움직이고 현서가 검토하는 자연스러운 역할 분담 구조가
                생깁니다. 둘 다 외부 지원(정보, 전문가 도움 등)을 선호하기
                때문에, 결정 과정에 ‘제3자의 자료’가 자주 등장하는 것도
                특징입니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 19 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 7 - 9
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  일과 감정이 섞이기 시작한 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                가을, 현서가 직장에서 승진 제안을 받으며 관계의 초점이
                ‘집안일’에서 ‘정서적 지원’으로 이동합니다. 현서는 새로운 역할에
                부담을 느끼고, 도현은 실질적 조언으로 도움을 주려 하지만 그
                과정에서 감정의 온도가 어긋납니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  현서: “팀장 지원하라는 얘기 나왔어요.” 도현: “그럼 하면 되죠.
                  잘할 수 있을 거예요.” 현서: “그게 말처럼 쉽지 않아요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 논리로 격려하고, 현서는 감정으로 공감받길 원합니다.
                하지만 이 시기를 지나며, 도현은 “지켜보는 것이 도움일 수 있다”는
                걸 배우고, 현서는 “상대의 방식이 다를 뿐 무관심은 아니라는 것”을
                이해합니다. 서로의 감정적 리듬을 맞추기 시작하면서 대화는 ‘문제
                해결’ 중심에서 ‘상황 공유’ 중심으로 바뀝니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 20 && (
        <Fragment>
          <article className="flex flex-col gap-7.5 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
                Month 10 - 12
              </h2>
              <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
                <span className="text-center leading-snug font-medium text-[#111111]">
                  재정과 계획을 함께 논의하며 현실을 맞춘 시기
                </span>
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
              <p className="whitespace-pre-wrap">
                연말이 다가오며, 적금 만기와 생활비 분배 같은 구체적이고 숫자가
                드러나는 대화가 잦아집니다.
              </p>
            </section>
            <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
              <div className="border-l-4 border-[#6DD4BD]/50 pl-5">
                <p className="leading-relaxed whitespace-pre-wrap">
                  도현: “이 돈 그냥 두는 건 아깝잖아요.” 현서: “괜히 잃으면 더
                  아까워요.”
                </p>
              </div>
              <p className="leading-relaxed font-semibold whitespace-pre-wrap">
                도현은 기회 비용을, 현서는 손실 회피를 먼저 떠올립니다. 둘 다
                합리적이지만, 계산의 출발점이 다릅니다. 논의는 쉽게 결론나지
                않지만, 대화를 통해 서로의 판단 기준이 구체화됩니다. 결국 절반은
                예금, 절반은 투자라는 중간 합의로 정리됩니다. 이 시기부터 두
                사람은 ‘누가 옳은가’보다 ‘어떤 기준으로 결정할까’를 함께 세우는
                연습을 시작합니다. 이 변화는 결혼생활의 피로도를 크게 줄이는
                요인으로 작동합니다.
              </p>
            </section>
          </article>
        </Fragment>
      )}
      {step === 21 && (
        <Fragment>
          <article className="flex flex-col gap-10 px-10 py-5 leading-snug">
            <section className="flex flex-col gap-5">
              <h2 className="text-center text-lg font-bold text-[#111111]">
                관계 회복 탄력성
              </h2>
              <section className="flex flex-col gap-7.5">
                <BarChart values={[10, 10, 10, 10]} barColor="#FFC0C1" />
                <div className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
                  <p className="whitespace-pre-wrap">
                    3년 차에 접어들면서, 두 사람은 싸움이 아니라 ‘회복의 방식’에
                    주목하기 시작합니다. 감정만이 아니라 맥락을 공유하고, 말보다
                    태도로 신뢰를 쌓습니다. 긴장을 관리하는 능력도 향상됩니다.
                    이 시기의 회복 탄력성은 급격히 높아지며, 부부는 앞으로 오랜
                    시간 행복하게 살아갈 기반을 다지게 됩니다.
                  </p>
                  <p className="whitespace-pre-wrap">
                    관계 회복 탄력성은 갈등이나 위기 이후, 관계가 얼마나 빠르고
                    건강하게 회복되는지를 나타내는 지표입니다. 감정의 골을
                    다루고 상호 이해를 회복하는 과정에서 나타나는 심리적·정서적
                    회복 능력을 의미합니다.
                  </p>
                </div>
              </section>
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="text-center text-lg font-bold">
                “평생 관계를 지탱할 힘을 만드는 3년차”
              </h2>
              <p className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]">
                결혼 3년차는 삶이 가장 바쁘고 무거운 과제가 몰려드는 시기입니다.
                {"\n"}일과 재정, 주거와 부모님, 사회적 관계가 한꺼번에
                다가오면서 두 사람 모두 눈앞의 일들을 버티는 데 급급해지기
                쉽습니다.{"\n"}그런데 바로 이 시기의 태도가, 앞으로의 관계
                패턴을 결정합니다. 서로의 생각을 미루고 외면하면, 멀어지는
                습관이 굳어집니다.{"\n"}반대로 짧더라도 대화하고, 작더라도
                약속을 지켜낸다면—그것이 평생의 관계를 지탱할 힘이 됩니다.
              </p>
              <p className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]">
                3년차는 부부가 진정한 독립성과 주도권을 확립한 전환점이었습니다.
                {"\n"}
                주거라는 큰 결정을 앞두고, 두 사람은 더 이상 서로에게만 부딪히는
                데 그치지 않고 외부 압력(양가 부모님의 상반된 조언)과 내부
                갈등(햇살/감성 vs 역세권/편의)을 동시에 마주했습니다.
              </p>
            </section>
            <section className="result-gradient flex flex-col gap-5 p-5">
              <h3 className="text-center leading-snug font-semibold text-[#3EA38D]">
                🧭 3년 차 부부를 위한 질문
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-center">
                <li>
                  최근 내린 중요한 결정들을 돌아볼 때, 우리 둘 다 납득하고
                  있나요?
                </li>
                <li>
                  최근 내린 중요한 결정들을 돌아볼 때, 우리 둘 다 납득하고
                  있나요?
                </li>
                <li>앞으로 비슷한 상황이 오면 어떻게 대처하고 싶나요?</li>
                <li>부부로서의 친밀한 시간도 충분히 갖고 있나요?</li>
              </ul>
            </section>
          </article>
        </Fragment>
      )}
    </main>
  );
}
