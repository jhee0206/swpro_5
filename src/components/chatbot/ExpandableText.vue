<template>
  <span class="expandable-root" @click.capture="onRootClick">
    <span
        class="text-content"
        :class="{ 'clamped': !isExpanded && isTooLong }"
        v-html="processedHtml"
    ></span>

    <div v-if="isTooLong" class="button-wrapper">
      <button @click.stop="toggleOverall" class="expand-button">
        {{ overallButtonText }}
      </button>
    </div>
  </span>
</template>

<script>
export default {
  name: 'ExpandableText',
  props: {
    text: { type: String, required: true },
    maxLength: { type: Number, default: 80 },
    highlightMode: { type: String, default: 'numbered' }
  },
  data() {
    return {
      isExpanded: false,
      sectionOpen: {}
    };
  },
  computed: {
    isTooLong() {
      return this.text.length > this.maxLength;
    },
    overallButtonText() {
      return this.isExpanded ? '간략히 보기' : '더보기';
    },
    highlightedText() {
      let base = this.text;
      if (this.highlightMode === 'subheadings_only') {
        const regex = /(불법행위 신고 대상|신고 시 유의사항|신고 방법|전화신고|인터넷 신고|모바일 신고|방문, 팩스, 우편 신고)/g;
        base = base.replace(regex, '<strong>$1</strong>');
      } else if (this.highlightMode === 'numbered') {
        const regex = /^(\d+\..*)/gm;
        base = base.replace(regex, '<strong>$1</strong>');
      }
      return base;
    },
    processedHtml() {
      // 줄바꿈을 <br>로 통일
      let html = this.highlightedText.replace(/(\r\n|\n|\r)/g, '<br>');

      // 소제목(클릭 비활성) 감싸기 - 괄호 유무/공백 허용
      const sections = [
        { key: 'meth',   pattern: /▶\s*필로폰(?:\s*|\s*\(메스암페타민\)\s*)/ },
        { key: 'coke',   pattern: /▶\s*코카인/ },
        { key: 'heroin', pattern: /▶\s*헤로인(?:\s*|\s*\(아편류\)\s*)/ },
        { key: 'lsd',    pattern: /▶\s*LSD/ },
        { key: 'weed',   pattern: /▶\s*대마초/ },
        { key: 'bond',   pattern: /▶\s*본드/ },
      ];

      sections.forEach(({ key, pattern }) => {
        html = html.replace(
            pattern,
            (m) => `<span class="sec-heading" data-sec="${key}">${m}</span>`
        );
      });

      // 소제목 아래 “자세히 보기/간략히 보기” 삽입 + 본문 패널 구성
      html = this.wrapSections(html);
      return html;
    }
  },
  methods: {
    toggleOverall() {
      this.isExpanded = !this.isExpanded;
    },
    onRootClick(e) {
      const link = e.target.closest('.app-link');
      if (link) {
        this.$emit('navigate');
        return;
      }

      const moreBtn = e.target.closest('.sec-readmore');
      const lessBtn = e.target.closest('.sec-readless');
      if (!moreBtn && !lessBtn) return;

      const btn = moreBtn || lessBtn;
      const key = btn.getAttribute('data-sec');
      if (!key) return;

      if (!this.isExpanded) this.isExpanded = true; // 잘림 방지

      const group = btn.closest('.sec-group');
      const panel = group?.querySelector('.sec-panel');
      const readMore = group?.querySelector('.sec-readmore');
      const readLess = group?.querySelector('.sec-readless');
      if (!panel || !readMore || !readLess) return;

      if (lessBtn) {
        this.sectionOpen = { ...this.sectionOpen, [key]: false };
        readLess.style.display = 'none';
        this.animateClose(panel, () => {
          readMore.style.display = 'inline';
        });
      } else {
        this.sectionOpen = { ...this.sectionOpen, [key]: true };
        readMore.style.display = 'none';
        this.animateOpen(panel, () => {
          readLess.style.display = 'inline';
        });
      }
    },
    animateOpen(panel, done) {
      panel.style.display = 'block';
      panel.style.overflow = 'hidden';
      panel.style.height = '0px';
      panel.offsetHeight;
      const h = panel.scrollHeight;
      panel.style.transition = 'height .24s ease';
      panel.style.height = h + 'px';
      setTimeout(() => {
        panel.style.height = 'auto';
        panel.style.transition = '';
        panel.style.overflow = '';
        done && done();
      }, 260);
    },
    animateClose(panel, done) {
      panel.style.overflow = 'hidden';
      const h = panel.scrollHeight;
      panel.style.height = h + 'px';
      panel.offsetHeight;
      panel.style.transition = 'height .24s ease';
      panel.style.height = '0px';
      setTimeout(() => {
        panel.style.transition = '';
        panel.style.display = 'none';
        panel.style.overflow = '';
        done && done();
      }, 260);
    },
    wrapSections(html) {
      const lines = html.split('<br>');
      const out = [];
      let i = 0;
      const bulletRegex = /^(\s*•|\s*-\s|\s*·\s)/;

      while (i < lines.length) {
        const line = lines[i];
        const isHeading = line.includes('class="sec-heading" data-sec="');
        if (!isHeading) {
          out.push(line);
          i++;
          continue;
        }

        // 그룹을 하나의 문자열로 만들기 시작
        let groupHtml = '<span class="sec-group">';
        groupHtml += line; // 소제목 추가

        const keyMatch = line.match(/data-sec="([^"]+)"/);
        const key = keyMatch ? keyMatch[1] : 'sec';
        const open = !!this.sectionOpen[key];

        // “자세히 보기” 버튼 추가
        groupHtml += `<button class="sec-link sec-readmore" data-sec="${key}" style="display:${open ? 'none' : 'inline'};">자세히 보기</button>`;

        // 본문 내용 수집
        const body = [];
        let count = 0;
        i++;
        while (i < lines.length && count < 3) {
          const trimmed = lines[i].replace(/^\s+/, '');
          if (bulletRegex.test(trimmed) || trimmed === '') {
            body.push(lines[i]);
            i++;
            if (bulletRegex.test(trimmed)) count++;
          } else {
            break;
          }
        }

        // “간략히 보기” 버튼을 본문 마지막에 추가
        body.push(
            `<button class="sec-link sec-readless" data-sec="${key}" style="display:${open ? 'inline' : 'none'}; margin-top:6px;">간략히 보기</button>`
        );

        // 패널을 만들고 그룹 문자열에 추가
        const display = open ? 'block' : 'none';
        groupHtml += `<div class="sec-panel" data-sec="${key}" style="display:${display};"> ${body.join('<br>')}</div>`;

        // 그룹 태그를 닫고 완성된 그룹을 out 배열에 추가
        groupHtml += '</span>';
        out.push(groupHtml);
      }
      return out.join('<br>');
    }
  }
};
</script>

<style scoped>
.text-content {
  display: block;
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* 전체 길이 축약(멀티라인 말줄임) */
.clamped {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}

/* 소제목(클릭 비활성) */
:deep(.sec-heading) {
  font-weight: 600;
  color: #111827;
}

/* 소제목 아래 “자세히 보기/간략히 보기”: 연분홍 글씨 + 연분홍 밑줄 */
:deep(.sec-link),
:deep(.sec-readmore),
:deep(.sec-readless) {
  all: unset;
  cursor: pointer;
  display: inline;
  font-size: 0.9em;
  color: #f284a6 !important;                 /* 연분홍 텍스트 */
  text-decoration-line: underline !important;
  text-decoration-color: #f284a6 !important; /* 연분홍 밑줄 */
  -webkit-text-decoration-color: #f284a6 !important;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  margin-left: 4px;
}

:deep(.sec-link:hover),
:deep(.sec-readmore:hover),
:deep(.sec-readless:hover) {
  color: #e5678f !important;
  text-decoration-color: #e5678f !important;
  -webkit-text-decoration-color: #e5678f !important;
}

/* v-html 내부 자가진단 링크: 연두색 텍스트로 변경(밑줄/밑줄색은 유지) */
:deep(.app-link) {
  color: #22c55e !important; /* 연두색 텍스트 */
}
:deep(.app-link:hover) {
  color: #16a34a !important; /* hover 더 진한 연두 */
}

/* 본문 패널 */
:deep(.sec-panel) {
  padding-left: 8px;
  margin-top: 2px;   /* 위쪽 살짝 띄우기 */
  margin-bottom: 0;  /* 아래쪽 여백 제거 */
}

/* 전체 길이 더보기/간략히 보기 */
.expand-button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 600;
}
.expand-button:hover {
  text-decoration: underline;
}
.button-wrapper {
  margin-top: 5px;
}

/* 폴백: text-decoration-color 미지원 환경 */
@supports not (text-decoration-color: #f284a6) {
  :deep(.sec-link),
  :deep(.sec-readmore),
  :deep(.sec-readless) {
    text-decoration: none !important;
    border-bottom: 2px solid #f284a6;
    line-height: 1.2;
  }
  :deep(.sec-link:hover),
  :deep(.sec-readmore:hover),
  :deep(.sec-readless:hover) {
    border-bottom-color: #e5678f;
  }
}
</style>