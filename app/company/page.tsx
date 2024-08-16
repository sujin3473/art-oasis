import Image from "next/image";

export default function Company() {
  return (
    <div className="pt-[70px] pb-[200px] px-[15%] font-maruburi">
      <div className="flex items-center">
        <div className="w-[292px] h-[313px] relative">
          <Image src="/images/ceo.png" alt="ceo" fill />
        </div>
        <div className="font-maruburi-bold">
          <h1 className="text-aro-blue text-[30px] mt-[60px]">
            여러분 안녕하십니까
          </h1>
          <h2 className="text-2xl font-semibold mt-[30px]">
            ㈜아르오종합건설을 아껴주셔서 진심으로 감사합니다.
          </h2>
        </div>
      </div>
      <div>
        <p className="mt-[20px] text-gray-6 text-[20px] leading-10">
          안녕하십니까? <br />
          <br />
          저희 주식회사 아르오종합건설은 최고의 결과물을 만들어내는 건설 전문
          회사로서 근린생활시설, 산업생산시설, 공동 · 단독주택뿐만 아니라
          광범위한 건설 영역에 대해 작업하고 있는 전문 업체 입니다. 2021년 회사
          설립 후 고객만족이라는 목표 아래 최선을 다해왔습니다.
          <br />
          <br /> 아르오(ARO)는 ‘ART(예술)’와 ‘OASIS(오아시스)’의 뜻을 담은
          아트오아시스(ARtOasis)의 줄임말로 예술적인 휴식처를 건설하고자 하는
          목표를 담고 있습니다.
          <br />
          <br />
          저희는 단지 여러분의 기대를 충족시키는 것이 아니라 한번 정한
          <span className="text-red-600 font-semibold"> 약속</span>은 반드시
          지킵니다. 사람을 남기는 것이 저희의 최우선 가치입니다.
          <br />
          <br />
          다시한번, 저희 <strong>아르오</strong>를 찾아주셔서 감사합니다.
        </p>
        <p className="mt-[100px] text-[20px] font-maruburi-bold">
          ㈜아르오종합건설 총괄대표이사
          <span className="font-black text-[30px] ml-2">송인규</span>
        </p>
      </div>
    </div>
  );
}
