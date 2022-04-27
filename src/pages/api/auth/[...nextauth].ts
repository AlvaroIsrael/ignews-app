import { query as q } from 'faunadb';
import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      scope: 'read:user',
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET || '',
  },
  callbacks: {
    async signIn(user: User): Promise<boolean> {
      const { email } = user;
      const userMail = (email || '').toLowerCase();

      try {
        await fauna.query(
          q.If(
            q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(userMail)))),
            q.Create(q.Collection('users'), {
              data: {
                email: userMail,
              },
            }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(userMail))),
          ),
        );
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});
