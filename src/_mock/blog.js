import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  "Mastering the Art of Personal Loans: Tips and Tricks",
"The Ultimate Guide to Secured vs. Unsecured Loans",
"Navigating the World of Student Loans: What You Need to Know",
"How to Get a Small Business Loan: A Step-by-Step Guide",
"Understanding Interest Rates: A Key Factor in Loan Selection",
"The Pros and Cons of Peer-to-Peer Lending",
"Avoiding Loan Scams: How to Protect Your Finances",
"The Power of Credit Scores: How They Affect Your Loan Eligibility",
"Refinancing Your Loans: Is It the Right Move for You?",
"Emergency Loans: A Lifeline in Times of Financial Crisis",
"Loans for Home Improvement: Revamp Your Space with Confidence",
"Auto Loans Demystified: Buying Your Dream Car",
"Debt Consolidation Loans: Simplify Your Finances and Save Money",
"The Impact of COVID-19 on Loans: What You Need to Know",
"Loans for Millennials: Financial Options for the New Generation",
"The Psychology of Borrowing: How to Make Informed Loan Decisions",
"Loans for Travel and Adventure: Funding Your Wanderlust",
"Green Loans: Investing in a Sustainable Future",
"Emergency Loans: Your Guide to Quick Financial Relief",
"Loans for Entrepreneurs: Fueling Your Startup Dreams",
"Loan Repayment Strategies: Paying Back What You Owe",
"The Role of Cosigners in Loan Applications: Pros and Cons",
"Loans for Travel and Adventure: Funding Your Wanderlust",
"Loans for Medical Expenses: Taking Care of Your Health and Finances"




];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
