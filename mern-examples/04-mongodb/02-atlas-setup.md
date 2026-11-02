# Atlas setup

Atlas is MongoDB hosted for free. Nobody installs a database.

1. Create a free account and a free cluster at https://www.mongodb.com/atlas
2. **Database Access**: add a database user (username + password). Avoid special characters
   in the password; if you use them, they must be URL-encoded.
3. **Network Access**: add your current IP (for class, 0.0.0.0/0 allows everyone; never leave
   that on a real project).
4. Click **Connect**, choose **Drivers**, and copy the connection string.
5. Copy `.env.example` to `.env` and paste it as `MONGO_URI`. Put the database name before the `?`:

```
MONGO_URI=mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/tracker?retryWrites=true&w=majority
```

CHECK: the cluster shows as active, and the string is in `.env`, never inside your code.
