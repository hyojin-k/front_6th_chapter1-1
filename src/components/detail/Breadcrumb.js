export default function Breadcrumb(category1 = "", category2 = "") {
  return /*html*/ `
    <!-- 브레드크럼 -->
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" class="hover:text-blue-600 transition-colors">홈</a>
        ${
          category1
            ? `
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link" data-category1="${category1}">
            ${category1}
          </button>
        `
            : ""
        }
        ${
          category2
            ? `
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <button class="breadcrumb-link" data-category2="${category2}">
            ${category2}
          </button>
        `
            : ""
        }
      </div>
    </nav>
  `;
}
