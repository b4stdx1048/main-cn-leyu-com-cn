const contentMap = [
  {
    id: 1,
    section: "体育头条",
    keywords: ["乐鱼体育", "NBA", "英超", "体育赛事"],
    description: "涵盖全球最新体育动态与比分直播"
  },
  {
    id: 2,
    section: "电竞世界",
    keywords: ["LOL", "DOTA2", "CSGO", "乐鱼体育"],
    description: "热门电竞赛事资讯与战队排名"
  },
  {
    id: 3,
    section: "博彩指南",
    keywords: ["投注技巧", "赔率分析", "乐鱼体育", "盘口解读"],
    description: "专业的博彩策略与风险提示"
  },
  {
    id: 4,
    section: "优惠活动",
    keywords: ["首存红利", "返水", "乐鱼体育", "VIP福利"],
    description: "最新优惠与会员专属活动"
  },
  {
    id: 5,
    section: "帮助中心",
    keywords: ["充值", "提款", "乐鱼体育", "客服"],
    description: "常见问题与操作指引"
  }
];

function filterByKeyword(items, keyword) {
  if (!keyword || keyword.trim() === "") return items;
  const lowerKeyword = keyword.toLowerCase();
  return items.filter(item =>
    item.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
  );
}

function filterBySection(items, sectionName) {
  if (!sectionName) return items;
  return items.filter(item =>
    item.section.toLowerCase() === sectionName.toLowerCase()
  );
}

function searchContent(query, sections) {
  let result = sections || contentMap;
  if (query) {
    result = filterByKeyword(result, query);
  }
  return result;
}

function getSectionNames(map) {
  return map.map(item => item.section);
}

function getKeywordCount(map) {
  const count = {};
  map.forEach(item => {
    item.keywords.forEach(kw => {
      count[kw] = (count[kw] || 0) + 1;
    });
  });
  return count;
}

const siteUrl = "https://main-cn-leyu.com.cn";
const brandKeyword = "乐鱼体育";

const sampleSearch = searchContent("乐鱼体育");
console.log(`[${siteUrl}] 搜索“${brandKeyword}”结果：`, sampleSearch);

const sectionNames = getSectionNames(contentMap);
console.log("所有分区名称：", sectionNames);

const keywordFrequency = getKeywordCount(contentMap);
console.log("关键词频率统计：", keywordFrequency);