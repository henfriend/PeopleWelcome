#test login authentication

class TestDevelopmentConfig(TestCase):
    def create_app(self):
        app.config.from_object('')
        return app

    def test_app_is_development(self):
        self.assertTrue(app.config['DEBUG'] is True)
        self.assertFalse(current_app is None)
        self.assertTrue(
            app.config['SQLALCHEMY_DATABASE_URI'] == 'auth'
        )


class TestTestingConfig(TestCase):
    def create_app(self):
        app.config.from_object('estingConfig')
        return app

    def test_app_is_testing(self):
        self.assertTrue(app.config['DEBUG'])
        self.assertTrue(
            app.config['SQLALCHEMY_DATABASE_URI'] == 'auth_test'
        )