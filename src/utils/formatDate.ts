/**
 * 指定された日付文字列を "YYYY.MM.DD" フォーマットに変換します。
 * 無効な日付や空文字の場合は "不明" を返します。
 * @param dateString - ISO形式の日付文字列
 * @returns フォーマット済みの日付文字列
 */
export const formatDate = (dateString?: string): string => {
  if (!dateString) return "不明";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "不明"; // 無効な日付チェック

  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};
